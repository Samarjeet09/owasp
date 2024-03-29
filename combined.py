import cv2
import time
import boto3
import os
import io
from PIL import Image

# Initialize AWS clients
rekognition = boto3.client('rekognition', region_name='us-east-1')
dynamodb = boto3.client('dynamodb', region_name='us-east-1')

def capture_frame(frame, filename):
    """Saves the captured frame.

    Args:
        frame: The frame captured from the webcam.
        filename: The filename to save the image under.
    """
    cv2.imwrite(filename, frame)

def send_to_rekognition(image_path):
    """Send image to Amazon Rekognition for face recognition.

    Args:
        image_path: The path of the image file to send.

    Returns:
        A tuple containing a boolean indicating whether a recognized person was found,
        the name of the recognized person if found (or None if not found),
        and the confidence level if a recognized person was found (or None if not found).
    """
    found = False
    person_name = None
    confidence_level = None

    with open(image_path, 'rb') as image_file:
        image_binary = image_file.read()

    response = rekognition.search_faces_by_image(
        CollectionId='famouspersons',
        Image={'Bytes': image_binary}
    )

    for match in response['FaceMatches']:
        face_id = match['Face']['FaceId']
        confidence = match['Face']['Confidence']
        face = dynamodb.get_item(
            TableName='face_recognition',
            Key={'RekognitionId': {'S': face_id}}
        )

        if 'Item' in face:
            person_name = face['Item']['FullName']['S']
            print("Found Person: ", person_name)
            found = True
            confidence_level = confidence

    return found, person_name, confidence_level

# Initialize webcam capture
video_capture = cv2.VideoCapture(0)

# Timer variables
capture_interval = 20  # Capture image every 20 seconds
last_capture_time = time.time()

while True:
    # Capture frame-by-frame
    ret, frame = video_capture.read()

    # Display the resulting frame
    cv2.imshow('Real-time Face Detection with Capture', frame)

    # Save the frame temporarily if it's time to capture an image
    current_time = time.time()
    if current_time - last_capture_time >= capture_interval:
        temp_image_path = f"captured_image_{int(current_time)}.jpg"
        capture_frame(frame, temp_image_path)

        # Send image to Rekognition for face recognition
        found_person, person_name, confidence_level = send_to_rekognition(temp_image_path)

        # Print a message based on whether a recognized person is found or not
        if found_person:
            print(f"Recognized Person: {person_name}, Confidence Level: {confidence_level}")
        else:
            print("Unknown Person Detected")

        # Update last capture time
        last_capture_time = current_time

    # Exit if 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close all windows
video_capture.release()
cv2.destroyAllWindows()
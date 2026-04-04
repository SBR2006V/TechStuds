import numpy as np
import tensorflow as tf

# Load pretrained model once
model = tf.keras.applications.MobileNetV2(weights="imagenet")

def predict_image(image):
    # Resize to model input
    img = image.resize((224, 224))
    img = np.array(img)

    # Preprocess
    img = tf.keras.applications.mobilenet_v2.preprocess_input(img)
    img = np.expand_dims(img, axis=0)

    # Predict
    preds = model.predict(img)

    # Decode result
    decoded = tf.keras.applications.mobilenet_v2.decode_predictions(preds, top=1)[0][0]

    label = decoded[1]
    confidence = float(decoded[2] * 100)

    return label, confidence
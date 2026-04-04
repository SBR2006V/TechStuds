from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io

from model import predict_image  # ✅ correct import (TOP)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Backend running"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    
    # Convert image properly
    image = Image.open(io.BytesIO(contents)).convert("RGB")

    # Call model
    prediction, confidence = predict_image(image)

    return {
        "prediction": prediction,
        "confidence": confidence
    }
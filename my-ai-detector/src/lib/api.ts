export async function runInference(text: string, image?: File) {
  const startTime = performance.now();
  
  const formData = new FormData();
  formData.append("text", text);
  if (image) formData.append("image", image);

  try {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    const endTime = performance.now();
    
    return {
      ...data, // Expected: { confidence: 0.94, is_fake: false, device: "cuda" }
      latency: `${Math.round(endTime - startTime)}ms`
    };
  } catch (error) {
    console.error("Connection to MiRAGeNews failed:", error);
    return null;
  }
}
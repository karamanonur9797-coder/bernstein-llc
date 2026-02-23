from PIL import Image

def remove_bg(input_path, output_path):
    # Use the original image from the Images directory
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        luminance = 0.299 * item[0] + 0.587 * item[1] + 0.114 * item[2]
        # The fake checkerboard is usually light gray/white. Text is black.
        if luminance > 150: # Threshold for removing background (checkerboard/white)
            newData.append((255, 255, 255, 0))
        else:
            # Smooth the edges by using luminance as alpha mask for anti-aliasing?
            # Or just make it pure black
            newData.append((0, 0, 0, 255))

    img.putdata(newData)
    img.save(output_path, "PNG")

remove_bg("../Images/Logo_1.png", "bernstein-site/public/logo.png")
print("Saved transparent logo")

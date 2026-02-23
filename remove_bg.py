from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # Loop over pixels: if it's close to white, make it transparent
    for item in datas:
        # Check if r, g, b are all high (like white)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

remove_white_bg("bernstein-site/public/logo.png", "bernstein-site/public/logo-transparent.png")
print("Saved transparent logo")

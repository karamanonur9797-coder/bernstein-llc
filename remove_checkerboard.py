from PIL import Image

def remove_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Calculate grayscale luminance equivalent
        luminance = 0.299 * item[0] + 0.587 * item[1] + 0.114 * item[2]
        
        # Text is black (near 0). Checkerboard is white/gray (typically > 150).
        if luminance < 50:
            # If it's very dark, it's the text. We can force it to pure black and fully opaque.
            # But what if there's anti-aliasing? We can use luminance as an inverse alpha channel!
            # If luminance is 0, alpha is 255 (fully opaque text).
            # If luminance > 50, alpha is 0 (fully transparent).
            
            # Simple threshold for sharp edges like requested ("png no background")
            newData.append((0, 0, 0, 255))
        elif luminance < 150:
            # Anti-aliasing edge: partial transparency based on how light it is
            alpha = int(255 * (1 - (luminance - 50) / 100))
            newData.append((0, 0, 0, alpha))
        else:
            # Lighter than 150 -> background (white or gray checkerboard)
            newData.append((255, 255, 255, 0))

    img.putdata(newData)
    img.save(output_path, "PNG")

remove_bg("Images/Logo_1.png", "bernstein-site/public/logo.png")
print("Saved transparent logo without checkerboard")

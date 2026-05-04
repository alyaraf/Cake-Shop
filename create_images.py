from PIL import Image, ImageDraw

# Create Service Background Image
service_img = Image.new('RGB', (1920, 150), color=(227, 108, 79))
draw = ImageDraw.Draw(service_img)
draw.text((960, 75), 'Service Background', fill=(255, 255, 255), anchor='mm')
service_img.save('src/assets/img/service.jpg')

# Create Offer Background Image
offer_img = Image.new('RGB', (1920, 300), color=(227, 108, 79))
draw = ImageDraw.Draw(offer_img)
draw.text((960, 150), 'Offer Background', fill=(255, 255, 255), anchor='mm')
offer_img.save('src/assets/img/offer.jpg')

print('✓ Service background image created')
print('✓ Offer background image created')

import os
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Dimensions: 90x50 mm at 600 DPI (2126 x 1181 px)
CARD_W = 2126
CARD_H = 1181

# Brand Colors from tailwind.config.js
COLOR_PRIMARY_RED = "#C8102E"  # Official DM Brand Red
COLOR_PRIMARY_HOVER = "#A00202"
COLOR_BG_WHITE = "#FFFFFF"
COLOR_BG_SOFT = "#F8FAFC"
COLOR_TEXT_MAIN = "#0F172A"    # Deep Charcoal Slate
COLOR_TEXT_MUTED = "#64748B"   # Neutral Slate
COLOR_BORDER = "#E2E8F0"

WEBSITE_URL = "https://stomatolog-muhammadali.uz"

PUBLIC_QR_DIR = os.path.abspath("frontend/public/qr")
ARTIFACTS_DIR = os.path.abspath(r"C:\Users\user\.gemini\antigravity\brain\7e11835c-1034-4486-a01c-138ea71d4f26")
os.makedirs(PUBLIC_QR_DIR, exist_ok=True)
os.makedirs(ARTIFACTS_DIR, exist_ok=True)

# Fonts
FONT_BOLD_PATH = "C:/Windows/Fonts/segoeuib.ttf"
FONT_REGULAR_PATH = "C:/Windows/Fonts/segoeui.ttf"
if not os.path.exists(FONT_BOLD_PATH):
    FONT_BOLD_PATH = "C:/Windows/Fonts/arialbd.ttf"
if not os.path.exists(FONT_REGULAR_PATH):
    FONT_REGULAR_PATH = "C:/Windows/Fonts/arial.ttf"

def get_font(size, bold=False):
    path = FONT_BOLD_PATH if bold else FONT_REGULAR_PATH
    try:
        return ImageFont.truetype(path, int(size))
    except Exception:
        return ImageFont.load_default()

def generate_clean_qr(size=340):
    """Generates simple, clean, crisp QR code for https://stomatolog-muhammadali.uz."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=1,
    )
    qr.add_data(WEBSITE_URL)
    qr.make(fit=True)
    img = qr.make_image(fill_color=COLOR_TEXT_MAIN, back_color=COLOR_BG_WHITE).convert("RGBA")
    return img.resize((size, size), Image.Resampling.LANCZOS)

def draw_big_sticker_icon(draw, center, radius, icon_type):
    """
    Draws a BIGGER, highly polished, modern sticker icon (Selection 4).
    Radius is 44px (Diameter 88px), prominent and beautiful.
    """
    cx, cy = center
    r = radius
    
    # Outer subtle soft ring
    draw.ellipse([cx - r - 4, cy - r - 4, cx + r + 4, cy + r + 4], fill="#FEE2E2")
    # Main Brand Red circle
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=COLOR_PRIMARY_RED)
    
    # Crisp white glyphs scaled up
    if icon_type == "phone":
        pw = int(r * 0.44)
        ph = int(r * 0.74)
        draw.rounded_rectangle([cx - pw, cy - ph, cx + pw, cy + ph], radius=int(pw * 0.5), fill="#FFFFFF")
        draw.ellipse([cx - int(pw * 0.35), cy + int(ph * 0.35), cx + int(pw * 0.35), cy + int(ph * 0.75)], fill=COLOR_PRIMARY_RED)
        draw.rectangle([cx - int(pw * 0.45), cy - int(ph * 0.55), cx + int(pw * 0.45), cy - int(ph * 0.35)], fill=COLOR_PRIMARY_RED)
    elif icon_type == "telegram":
        # Telegram paper plane
        pts = [(cx - int(r * 0.52), cy - int(r * 0.05)), (cx + int(r * 0.55), cy - int(r * 0.44)), (cx - int(r * 0.1), cy + int(r * 0.52))]
        draw.polygon(pts, fill="#FFFFFF")
        pts2 = [(cx - int(r * 0.1), cy + int(r * 0.52)), (cx + int(r * 0.55), cy - int(r * 0.44)), (cx + int(r * 0.12), cy + int(r * 0.1))]
        draw.polygon(pts2, fill="#FEE2E2")
    elif icon_type == "instagram":
        iw = int(r * 0.52)
        draw.rounded_rectangle([cx - iw, cy - iw, cx + iw, cy + iw], radius=int(iw * 0.32), outline="#FFFFFF", width=4)
        draw.ellipse([cx - int(iw * 0.45), cy - int(iw * 0.45), cx + int(iw * 0.45), cy + int(iw * 0.45)], outline="#FFFFFF", width=4)
        draw.ellipse([cx + int(iw * 0.46), cy - int(iw * 0.66), cx + int(iw * 0.66), cy - int(iw * 0.46)], fill="#FFFFFF")
    elif icon_type == "website":
        gr = int(r * 0.56)
        draw.ellipse([cx - gr, cy - gr, cx + gr, cy + gr], outline="#FFFFFF", width=4)
        draw.line([(cx - gr, cy), (cx + gr, cy)], fill="#FFFFFF", width=4)
        draw.line([(cx, cy - gr), (cx, cy + gr)], fill="#FFFFFF", width=4)
        draw.ellipse([cx - int(gr * 0.5), cy - gr, cx + int(gr * 0.5), cy + gr], outline="#FFFFFF", width=3)
    elif icon_type == "location":
        lr = int(r * 0.46)
        draw.ellipse([cx - lr, cy - int(r * 0.65), cx + lr, cy + int(r * 0.15)], fill="#FFFFFF")
        pts = [(cx - lr, cy - int(r * 0.25)), (cx + lr, cy - int(r * 0.25)), (cx, cy + int(r * 0.68))]
        draw.polygon(pts, fill="#FFFFFF")
        draw.ellipse([cx - int(lr * 0.42), cy - int(r * 0.4), cx + int(lr * 0.42), cy - int(r * 0.08)], fill=COLOR_PRIMARY_RED)

# ==============================================================================
# 1. FRONT SIDE: EXACTLY AS REQUESTED IN SELECTIONS 0, 1, 2
# ==============================================================================
def create_perfect_front():
    """
    Side 1 (Front):
    - Selection 0: "MuhammadAli Davronov" (Prominent, big, bold under logo)
    - Selection 1: "DM stomatologik klinika" (Clean red subtitle)
    - Selection 2: "Andijon, Prospekt" (Location line)
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), COLOR_BG_WHITE)
    draw = ImageDraw.Draw(card)
    
    # Bottom Red Accent Bar
    accent_h = 24
    draw.rectangle([0, CARD_H - accent_h, CARD_W, CARD_H], fill=COLOR_PRIMARY_RED)
    
    # Real official DM logo in center
    try:
        logo = Image.open("frontend/public/logo.png").convert("RGBA")
        l_w = 480
        l_h = int(l_w * (logo.size[1] / logo.size[0]))
        logo = logo.resize((l_w, l_h), Image.Resampling.LANCZOS)
        card.paste(logo, ((CARD_W - l_w) // 2, 210), logo)
    except Exception as e:
        print("Logo error:", e)
        draw.text((CARD_W / 2, 360), "DM", font=get_font(130, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
        
    # Selection 0: MuhammadAli Davronov (BIGGER, bolder, prominent!)
    draw.text((CARD_W / 2, 690), "MuhammadAli Davronov", font=get_font(72, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    
    # Small red dividing line
    draw.rectangle([CARD_W / 2 - 80, 755, CARD_W / 2 + 80, 760], fill=COLOR_PRIMARY_RED)
    
    # Selection 1: DM stomatologik klinika
    draw.text((CARD_W / 2, 810), "DM stomatologik klinika", font=get_font(42, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
    
    # Selection 2: Andijon, Prospekt
    draw.text((CARD_W / 2, 875), "Andijon, Prospekt", font=get_font(32, bold=False), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    return card.convert("RGB")

# ==============================================================================
# 2. BACK SIDE: EXACTLY AS REQUESTED IN SELECTIONS 3, 4, 5 & USER REQUEST
# ==============================================================================
def create_perfect_back():
    """
    Side 2 (Back):
    - Selection 5: REMOVED "Andijon davlat tibbiyot institutining Yuz-jag' jarrohligi klinik ordinatori"
    - Selection 3: "make juma from 14:00 to 18:00"
    - Selection 4: "improve stickers and bigger"
    - User Request: "improve text font style and size bigger"
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), COLOR_BG_WHITE)
    draw = ImageDraw.Draw(card)
    
    # Bottom Red Accent Bar
    accent_h = 24
    draw.rectangle([0, CARD_H - accent_h, CARD_W, CARD_H], fill=COLOR_PRIMARY_RED)
    
    # Doctor Name (BIGGER, BOLD, PROMINENT: 74px!)
    draw.text((110, 105), "MuhammadAli Davronov", font=get_font(74, bold=True), fill=COLOR_TEXT_MAIN)
    
    # Clear Title (Bold 36px, Red Accent)
    draw.text((110, 195), "Stomatolog-Implantolog  •  Ortoped  •  DM Stomatologiya", font=get_font(36, bold=True), fill=COLOR_PRIMARY_RED)
    
    # Clean Divider Line
    draw.line([(110, 255), (1420, 255)], fill=COLOR_BORDER, width=2)
    draw.line([(110, 255), (320, 255)], fill=COLOR_PRIMARY_RED, width=5)
    
    # ==================== SELECTION 4: BIGGER, IMPROVED STICKERS & BIG TEXT ====================
    # 5 Contact Rows with Radius 44px (Diameter 88px)
    contacts = [
        ("phone", "Telefon / Qabul:", "+998 97 676 01 01", COLOR_PRIMARY_RED, 40),
        ("telegram", "Telegram:", "+998 97 676 01 01   (@dm_stomatology)", COLOR_TEXT_MAIN, 34),
        ("instagram", "Instagram:", "@dm.muxammadali", "#E11D48", 38),
        ("website", "Veb-sayt:", "stomatolog-muhammadali.uz", "#0284C7", 34),
        ("location", "Manzil:", "Andijon, Prospekt, Navoiy 91  (Sariq Bola pizza yonida)", COLOR_TEXT_MAIN, 30),
    ]
    
    start_y = 330
    row_gap = 145
    sticker_r = 44  # BIGGER stickers!
    
    for i, (icon_type, label, value, val_color, val_size) in enumerate(contacts):
        row_cy = start_y + i * row_gap + sticker_r
        
        # Bigger improved sticker icon
        draw_big_sticker_icon(draw, (110 + sticker_r, row_cy), sticker_r, icon_type=icon_type)
        
        # Text details with bigger fonts
        text_x = 110 + sticker_r * 2 + 32
        draw.text((text_x, row_cy - 28), label, font=get_font(22, bold=False), fill=COLOR_TEXT_MUTED)
        draw.text((text_x, row_cy + 5), value, font=get_font(val_size, bold=True), fill=val_color)
        
    # ==================== RIGHT SIDE: WORKING HOURS (SELECTION 3) & SIMPLE QR ====================
    right_card_w = 520
    right_x = CARD_W - right_card_w - 110
    
    # Selection 3: "make juma from 14:00 to 18:00"
    hours_box_h = 240
    hours_box_y = 105
    draw.rounded_rectangle(
        [right_x, hours_box_y, right_x + right_card_w, hours_box_y + hours_box_h],
        radius=20,
        fill=COLOR_BG_SOFT,
        outline=COLOR_BORDER,
        width=2
    )
    
    draw.text((right_x + right_card_w / 2, hours_box_y + 40), "ISH TARTIBI", font=get_font(24, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
    draw.text((right_x + right_card_w / 2, hours_box_y + 90), "Dush – Shan: 08:30 – 18:30", font=get_font(26, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    # Juma highlighted: 14:00 to 18:00
    draw.text((right_x + right_card_w / 2, hours_box_y + 138), "Juma: 14:00 – 18:00", font=get_font(28, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
    draw.text((right_x + right_card_w / 2, hours_box_y + 188), "Yakshanba: oldindan yozilish", font=get_font(22, bold=False), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    # Simple Website QR Code Box
    qr_box_y = 375
    qr_box_h = 670
    draw.rounded_rectangle(
        [right_x, qr_box_y, right_x + right_card_w, qr_box_y + qr_box_h],
        radius=24,
        fill=COLOR_BG_SOFT,
        outline=COLOR_BORDER,
        width=2
    )
    
    # QR Code
    qr_sz = 390
    qr_img = generate_clean_qr(size=qr_sz)
    card.paste(qr_img, (right_x + (right_card_w - qr_sz) // 2, qr_box_y + 50), qr_img)
    
    # QR label
    draw.text((right_x + right_card_w / 2, qr_box_y + 490), "VEB-SAYTGA O'TISH", font=get_font(28, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    draw.text((right_x + right_card_w / 2, qr_box_y + 540), "Kamerani QR kodga qarating", font=get_font(22, bold=False), fill=COLOR_PRIMARY_RED, anchor="mm")
    draw.text((right_x + right_card_w / 2, qr_box_y + 595), "stomatolog-muhammadali.uz", font=get_font(22, bold=True), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    return card.convert("RGB")

print("Rendering perfected business cards based on all user comments...")

front = create_perfect_front()
back = create_perfect_back()

# Save PNG and PDF formats
front.save(os.path.join(PUBLIC_QR_DIR, "business_card_modern_front.png"), dpi=(600, 600))
front.save(os.path.join(PUBLIC_QR_DIR, "business_card_modern_front.pdf"), "PDF", resolution=600.0)
front.save(os.path.join(ARTIFACTS_DIR, "business_card_modern_front.png"), dpi=(600, 600))
front.save(os.path.join(ARTIFACTS_DIR, "business_card_modern_front.pdf"), "PDF", resolution=600.0)

back.save(os.path.join(PUBLIC_QR_DIR, "business_card_modern_back.png"), dpi=(600, 600))
back.save(os.path.join(PUBLIC_QR_DIR, "business_card_modern_back.pdf"), "PDF", resolution=600.0)
back.save(os.path.join(ARTIFACTS_DIR, "business_card_modern_back.png"), dpi=(600, 600))
back.save(os.path.join(ARTIFACTS_DIR, "business_card_modern_back.pdf"), "PDF", resolution=600.0)

# Double-sided combined PDF for printing
front.save(
    os.path.join(PUBLIC_QR_DIR, "business_card_modern_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[back]
)
front.save(
    os.path.join(ARTIFACTS_DIR, "business_card_modern_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[back]
)

print("[OK] All user comments implemented with 100% precision!")

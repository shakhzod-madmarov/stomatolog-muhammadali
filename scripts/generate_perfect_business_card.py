import os
import math
import qrcode
import fitz
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

def generate_clean_qr(size=380):
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

# Authentic Vector SVG Definitions for 100% Crisp Icons
SVG_ICONS = {
    "phone": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="white" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
    </svg>""",

    "telegram": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="white" d="M21.93 3.12a1.27 1.27 0 0 0-1.22-.26L2.34 9.17a1.27 1.27 0 0 0-.05 2.39l5.05 2.02 1.95 6.09a1.27 1.27 0 0 0 2.07.56l3.18-2.82 5.08 3.75a1.27 1.27 0 0 0 2-.72l3.43-16.12a1.27 1.27 0 0 0-3.12-1.21zM8.5 13.5l8.6-5.8-6.9 7.4-.2 2.7-1.5-4.3z"/>
    </svg>""",

    "instagram": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2.6"/>
    </svg>""",

    "website": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>""",

    "location": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="white" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
    </svg>"""
}

def create_super_vector_sticker(size=112, icon_type="phone"):
    """
    Renders official SVG vector icon inside a vibrant Brand Red circular badge.
    Downsampled with Lanczos for razor-sharp anti-aliased finish.
    """
    scale = 4
    full_s = size * scale
    
    # 1. Circular badge
    badge = Image.new("RGBA", (full_s, full_s), (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(badge)
    bdraw.ellipse([0, 0, full_s - 1, full_s - 1], fill=COLOR_PRIMARY_RED)
    
    # 2. Render SVG icon
    svg_data = SVG_ICONS[icon_type]
    doc = fitz.open(stream=svg_data.encode("utf-8"), filetype="svg")
    
    # Proportions: 52% of sticker diameter for balanced visual weight
    icon_box = int(full_s * 0.52)
    view_size = 512 if icon_type == "phone" else 24
    calc_dpi = int((icon_box * 72.0) / view_size)
    pix = doc[0].get_pixmap(dpi=calc_dpi, alpha=True)
    icon_img = Image.frombytes("RGBA", [pix.width, pix.height], pix.samples)
    
    icon_img.thumbnail((icon_box, icon_box), Image.Resampling.LANCZOS)
    
    ix = (full_s - icon_img.size[0]) // 2
    iy = (full_s - icon_img.size[1]) // 2
    badge.paste(icon_img, (ix, iy), icon_img)
    
    return badge.resize((size, size), Image.Resampling.LANCZOS)

# ==============================================================================
# 1. FRONT SIDE: EXACTLY AS REQUESTED IN SELECTIONS 0, 1, 2
# ==============================================================================
def create_perfect_front():
    """
    Side 1 (Front):
    - Selection 0: "MuhammadAli Davronov" (Big, bold, prominent: 80px)
    - Selection 1: "DM stomatologik klinika" (Clean red subtitle: 46px)
    - Selection 2: "Andijon, Prospekt" (Location line: 36px)
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), COLOR_BG_WHITE)
    draw = ImageDraw.Draw(card)
    
    # Bottom Red Accent Bar
    accent_h = 24
    draw.rectangle([0, CARD_H - accent_h, CARD_W, CARD_H], fill=COLOR_PRIMARY_RED)
    
    # Real official DM logo emblem in center (pure icon without duplicate text)
    try:
        logo = Image.open("frontend/public/logo_icon.png").convert("RGBA")
        l_w = 420
        l_h = int(l_w * (logo.size[1] / logo.size[0]))
        logo = logo.resize((l_w, l_h), Image.Resampling.LANCZOS)
        card.paste(logo, ((CARD_W - l_w) // 2, 210), logo)
    except Exception as e:
        print("Logo error:", e)
        draw.text((CARD_W / 2, 360), "DM", font=get_font(130, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
        
    # Selection 0: MuhammadAli Davronov (Bolder, bigger: 82px!)
    draw.text((CARD_W / 2, 695), "MuhammadAli Davronov", font=get_font(82, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    
    # Small red dividing line
    draw.rectangle([CARD_W / 2 - 90, 765, CARD_W / 2 + 90, 771], fill=COLOR_PRIMARY_RED)
    
    # Selection 1: DM stomatologik klinika
    draw.text((CARD_W / 2, 825), "DM stomatologik klinika", font=get_font(46, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
    
    # Selection 2: Andijon, Prospekt
    draw.text((CARD_W / 2, 890), "Andijon, Prospekt", font=get_font(36, bold=False), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    return card.convert("RGB")

# ==============================================================================
# 2. BACK SIDE: EXACTLY AS REQUESTED IN SELECTIONS 3, 4, 5 & USER REQUEST
# ==============================================================================
def create_perfect_back():
    """
    Side 2 (Back):
    - Selection 5: REMOVED "Andijon davlat tibbiyot institutining Yuz-jag' jarrohligi klinik ordinatori"
    - Selection 3: "make juma from 14:00 to 18:00"
    - Selection 4: "improve stickers and bigger" (Radius 56px / Diameter 112px SVG vectors)
    - User Request: "improve text font style and size bigger"
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), COLOR_BG_WHITE)
    draw = ImageDraw.Draw(card)
    
    # Bottom Red Accent Bar
    accent_h = 24
    draw.rectangle([0, CARD_H - accent_h, CARD_W, CARD_H], fill=COLOR_PRIMARY_RED)
    
    # Doctor Name (BIG, BOLD, PROMINENT: 78px!)
    draw.text((110, 100), "MuhammadAli Davronov", font=get_font(78, bold=True), fill=COLOR_TEXT_MAIN)
    
    # Clear Title (Bold 36px, Red Accent)
    draw.text((110, 192), "Stomatolog-Implantolog  •  Ortoped  •  DM Stomatologiya", font=get_font(36, bold=True), fill=COLOR_PRIMARY_RED)
    
    # Clean Divider Line
    draw.line([(110, 252), (1420, 252)], fill=COLOR_BORDER, width=2)
    draw.line([(110, 252), (340, 252)], fill=COLOR_PRIMARY_RED, width=5)
    
    # ==================== SELECTION 4: BIGGER, IMPROVED SVG STICKERS & BIG TEXT ====================
    # 5 Contact Rows with 112px Diameter Authentic Vector Badges
    contacts = [
        ("phone", "Telefon / Qabul:", "+998 97 676 01 01", COLOR_PRIMARY_RED, 44),
        ("telegram", "Telegram:", "+998 97 676 01 01   (@dm_stomatology)", COLOR_TEXT_MAIN, 36),
        ("instagram", "Instagram:", "@dm.muxammadali", "#E11D48", 38),
        ("website", "Veb-sayt:", "stomatolog-muhammadali.uz", "#0284C7", 34),
        ("location", "Manzil:", "Andijon, Prospekt, Navoiy 91  (Sariq Bola pizza yonida)", COLOR_TEXT_MAIN, 30),
    ]
    
    start_y = 325
    row_gap = 148
    sticker_size = 112  # Bigger 112px diameter authentic SVG stickers
    
    for i, (icon_type, label, value, val_color, val_size) in enumerate(contacts):
        row_top = start_y + i * row_gap
        
        # Paste improved authentic SVG vector sticker
        sticker = create_super_vector_sticker(size=sticker_size, icon_type=icon_type)
        card.paste(sticker, (110, row_top), sticker)
        
        # Text details with bigger, well-proportioned fonts
        text_x = 110 + sticker_size + 34
        draw.text((text_x, row_top + 10), label, font=get_font(23, bold=False), fill=COLOR_TEXT_MUTED)
        draw.text((text_x, row_top + 46), value, font=get_font(val_size, bold=True), fill=val_color)
        
    # ==================== RIGHT SIDE: WORKING HOURS (SELECTION 3) & SIMPLE QR ====================
    right_card_w = 540
    right_x = CARD_W - right_card_w - 110
    
    # Selection 3: "make juma from 14:00 to 18:00"
    hours_box_h = 245
    hours_box_y = 100
    draw.rounded_rectangle(
        [right_x, hours_box_y, right_x + right_card_w, hours_box_y + hours_box_h],
        radius=20,
        fill=COLOR_BG_SOFT,
        outline=COLOR_BORDER,
        width=2
    )
    
    draw.text((right_x + right_card_w / 2, hours_box_y + 42), "ISH TARTIBI", font=get_font(24, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
    draw.text((right_x + right_card_w / 2, hours_box_y + 92), "Dush – Shan: 08:30 – 18:30", font=get_font(27, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    # Friday hours clearly stated as requested: 14:00 to 18:00
    draw.text((right_x + right_card_w / 2, hours_box_y + 142), "Juma: 14:00 – 18:00", font=get_font(28, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
    draw.text((right_x + right_card_w / 2, hours_box_y + 192), "Yakshanba: oldindan yozilish", font=get_font(22, bold=False), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    # Simple Website QR Code Box
    qr_box_y = 375
    qr_box_h = 675
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
    card.paste(qr_img, (right_x + (right_card_w - qr_sz) // 2, qr_box_y + 45), qr_img)
    
    # QR label
    draw.text((right_x + right_card_w / 2, qr_box_y + 490), "VEB-SAYTGA O'TISH", font=get_font(28, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    draw.text((right_x + right_card_w / 2, qr_box_y + 542), "Kamerani QR kodga qarating", font=get_font(23, bold=False), fill=COLOR_PRIMARY_RED, anchor="mm")
    draw.text((right_x + right_card_w / 2, qr_box_y + 598), "stomatolog-muhammadali.uz", font=get_font(23, bold=True), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    return card.convert("RGB")

print("Rendering perfected business cards with authentic SVG vector super-stickers...")

front = create_perfect_front()
back = create_perfect_back()

# Save PNG and PDF formats to both public/qr and artifacts directory
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

print("[OK] Authentic SVG super-stickers generated and double-sided PDF updated successfully!")

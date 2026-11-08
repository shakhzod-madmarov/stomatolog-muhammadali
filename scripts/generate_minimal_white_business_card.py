import os
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Dimensions: 90x50 mm at 600 DPI (2126 x 1181 px)
CARD_W = 2126
CARD_H = 1181

# Brand Colors from tailwind.config.js
COLOR_PRIMARY_RED = "#C8102E"  # Official DM Brand Red
COLOR_PRIMARY_DARK = "#830000"
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
FONT_SEMI_PATH = "C:/Windows/Fonts/segoeuisl.ttf"
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

def generate_simple_website_qr(size=320):
    """
    Generates a simple, clean, crisp QR code for https://stomatolog-muhammadali.uz.
    Minimal, high-contrast, effortless to scan by any phone camera.
    """
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

def draw_circle_icon(draw, center, radius, icon_type):
    """Clean minimalist circular red contact icon (matching Image 2 & 3)."""
    cx, cy = center
    r = radius
    # Clean red circle
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=COLOR_PRIMARY_RED)
    
    # Crisp white glyph
    if icon_type == "phone":
        pw = int(r * 0.42)
        ph = int(r * 0.72)
        draw.rounded_rectangle([cx - pw, cy - ph, cx + pw, cy + ph], radius=int(pw * 0.5), fill="#FFFFFF")
        draw.ellipse([cx - int(pw * 0.35), cy + int(ph * 0.35), cx + int(pw * 0.35), cy + int(ph * 0.75)], fill=COLOR_PRIMARY_RED)
        draw.rectangle([cx - int(pw * 0.45), cy - int(ph * 0.55), cx + int(pw * 0.45), cy - int(ph * 0.35)], fill=COLOR_PRIMARY_RED)
    elif icon_type == "telegram":
        pts = [(cx - int(r * 0.48), cy - int(r * 0.05)), (cx + int(r * 0.52), cy - int(r * 0.42)), (cx - int(r * 0.08), cy + int(r * 0.48))]
        draw.polygon(pts, fill="#FFFFFF")
        pts2 = [(cx - int(r * 0.08), cy + int(r * 0.48)), (cx + int(r * 0.52), cy - int(r * 0.42)), (cx + int(r * 0.12), cy + int(r * 0.1))]
        draw.polygon(pts2, fill="#FEE2E2")
    elif icon_type == "instagram":
        iw = int(r * 0.48)
        draw.rounded_rectangle([cx - iw, cy - iw, cx + iw, cy + iw], radius=int(iw * 0.3), outline="#FFFFFF", width=3)
        draw.ellipse([cx - int(iw * 0.45), cy - int(iw * 0.45), cx + int(iw * 0.45), cy + int(iw * 0.45)], outline="#FFFFFF", width=3)
        draw.ellipse([cx + int(iw * 0.45), cy - int(iw * 0.65), cx + int(iw * 0.65), cy - int(iw * 0.45)], fill="#FFFFFF")
    elif icon_type == "website":
        gr = int(r * 0.52)
        draw.ellipse([cx - gr, cy - gr, cx + gr, cy + gr], outline="#FFFFFF", width=3)
        draw.line([(cx - gr, cy), (cx + gr, cy)], fill="#FFFFFF", width=3)
        draw.line([(cx, cy - gr), (cx, cy + gr)], fill="#FFFFFF", width=3)
        draw.ellipse([cx - int(gr * 0.5), cy - gr, cx + int(gr * 0.5), cy + gr], outline="#FFFFFF", width=2)
    elif icon_type == "location":
        lr = int(r * 0.42)
        draw.ellipse([cx - lr, cy - int(r * 0.62), cx + lr, cy + int(r * 0.15)], fill="#FFFFFF")
        pts = [(cx - lr, cy - int(r * 0.22)), (cx + lr, cy - int(r * 0.22)), (cx, cy + int(r * 0.62))]
        draw.polygon(pts, fill="#FFFFFF")
        draw.ellipse([cx - int(lr * 0.4), cy - int(r * 0.38), cx + int(lr * 0.4), cy - int(r * 0.08)], fill=COLOR_PRIMARY_RED)

# ==============================================================================
# 1. FRONT SIDE: PURE, CLEAN, MINIMALIST (Image 2 Style)
# ==============================================================================
def create_minimal_white_front():
    """
    Side 1 (Front): Clean White Medical Brand Card.
    Centered real DM Stomatologiya logo, clean brand title, and signature red bottom accent line.
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), COLOR_BG_WHITE)
    draw = ImageDraw.Draw(card)
    
    # Signature bottom red accent bar (like Image 2)
    accent_h = 24
    draw.rectangle([0, CARD_H - accent_h, CARD_W, CARD_H], fill=COLOR_PRIMARY_RED)
    
    # Real official DM logo in center
    try:
        logo = Image.open("frontend/public/logo.png").convert("RGBA")
        l_w = 520
        l_h = int(l_w * (logo.size[1] / logo.size[0]))
        logo = logo.resize((l_w, l_h), Image.Resampling.LANCZOS)
        card.paste(logo, ((CARD_W - l_w) // 2, 290), logo)
    except Exception as e:
        print("Logo error:", e)
        draw.text((CARD_W / 2, 380), "DM", font=get_font(120, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
        
    # Brand typography under logo
    draw.text((CARD_W / 2, 750), "DM STOMATOLOGIYA", font=get_font(60, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    draw.text((CARD_W / 2, 825), "STOMATOLOGIK KLINIKA  •  ANDIJON", font=get_font(26, bold=False), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    # Subtle red small center divider
    draw.rectangle([CARD_W / 2 - 60, 870, CARD_W / 2 + 60, 874], fill=COLOR_PRIMARY_RED)
    draw.text((CARD_W / 2, 925), "Dr. MuhammadAli Davronov", font=get_font(34, bold=False), fill=COLOR_TEXT_MAIN, anchor="mm")
    
    return card.convert("RGB")

# ==============================================================================
# 2. BACK SIDE: CLEAN, SPACIOUS, MODERN (Image 2 & 3 Style)
# ==============================================================================
def create_minimal_white_back():
    """
    Side 2 (Back): Spacious White Card with Left Contacts and Right Website QR.
    Zero clutter, matching real project UI/UX and colors.
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), COLOR_BG_WHITE)
    draw = ImageDraw.Draw(card)
    
    # Signature bottom red accent bar
    accent_h = 24
    draw.rectangle([0, CARD_H - accent_h, CARD_W, CARD_H], fill=COLOR_PRIMARY_RED)
    
    # Small top-left subtle brand mark
    draw.text((120, 95), "DM STOMATOLOGIYA", font=get_font(24, bold=True), fill=COLOR_PRIMARY_RED)
    
    # Doctor Name (Large, Bold, Clean)
    draw.text((120, 145), "Dr. MuhammadAli Davronov", font=get_font(62, bold=True), fill=COLOR_TEXT_MAIN)
    
    # Titles & Credentials (Clean, spacious, 2 lines)
    draw.text((120, 235), "Andijon davlat tibbiyot institutining Yuz-jag' jarrohligi klinik ordinatori", font=get_font(26, bold=False), fill=COLOR_TEXT_MUTED)
    draw.text((120, 275), "Dental Implantologiya  •  Ortopediya (Sirkon & Vinirlar)  •  Terapiya", font=get_font(28, bold=True), fill=COLOR_PRIMARY_RED)
    
    # Clean subtle horizontal divider line
    draw.line([(120, 335), (1450, 335)], fill=COLOR_BORDER, width=2)
    draw.line([(120, 335), (280, 335)], fill=COLOR_PRIMARY_RED, width=4)
    
    # ==================== CONTACT LIST (Left 68%) ====================
    contacts = [
        ("phone", "Telefon / Qabul:", "+998 97 676 01 01"),
        ("telegram", "Telegram:", "+998 97 676 01 01   (@dm_stomatology)"),
        ("instagram", "Instagram:", "@dm.muxammadali"),
        ("website", "Veb-sayt:", "stomatolog-muhammadali.uz"),
        ("location", "Manzil:", "Andijon sh., Prospekt, Navoiy sh., 91-uy (Sariq Bola pizza yonida)"),
    ]
    
    start_y = 390
    row_gap = 120
    icon_r = 30
    
    for i, (icon_type, label, value) in enumerate(contacts):
        row_cy = start_y + i * row_gap
        
        # Minimal red icon
        draw_circle_icon(draw, (120 + icon_r, row_cy), icon_r, icon_type=icon_type)
        
        # Text details
        text_x = 120 + icon_r * 2 + 25
        draw.text((text_x, row_cy - 24), label, font=get_font(20, bold=False), fill=COLOR_TEXT_MUTED)
        
        val_font = get_font(34, bold=True) if icon_type in ("phone", "instagram") else get_font(28, bold=True)
        val_color = COLOR_PRIMARY_RED if icon_type == "phone" else COLOR_TEXT_MAIN
        draw.text((text_x, row_cy + 4), value, font=val_font, fill=val_color)
        
    # ==================== SIMPLE QR CODE (Right 32%) ====================
    qr_card_w = 440
    qr_card_h = 580
    qr_right_x = CARD_W - qr_card_w - 120
    qr_top_y = 360
    
    # Soft elevated card box for QR
    draw.rounded_rectangle(
        [qr_right_x, qr_top_y, qr_right_x + qr_card_w, qr_top_y + qr_card_h],
        radius=24,
        fill=COLOR_BG_SOFT,
        outline=COLOR_BORDER,
        width=2
    )
    
    # Simple, crisp QR code for website
    qr_sz = 340
    qr_img = generate_simple_website_qr(size=qr_sz)
    card.paste(qr_img, (qr_right_x + (qr_card_w - qr_sz) // 2, qr_top_y + 45), qr_img)
    
    # Clear text under QR
    draw.text((qr_right_x + qr_card_w / 2, qr_top_y + 425), "VEB-SAYTGA O'TISH", font=get_font(24, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    draw.text((qr_right_x + qr_card_w / 2, qr_top_y + 465), "Telefon kamerasini qarating", font=get_font(20, bold=False), fill=COLOR_PRIMARY_RED, anchor="mm")
    draw.text((qr_right_x + qr_card_w / 2, qr_top_y + 510), "Onlayn qabul va xizmatlar", font=get_font(18, bold=False), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    # Working hours badge at top-right (above QR)
    draw.rounded_rectangle([qr_right_x, 140, qr_right_x + qr_card_w, 290], radius=18, fill=COLOR_BG_SOFT, outline=COLOR_BORDER, width=2)
    draw.text((qr_right_x + qr_card_w / 2, 175), "ISH TARTIBI", font=get_font(20, bold=True), fill=COLOR_PRIMARY_RED, anchor="mm")
    draw.text((qr_right_x + qr_card_w / 2, 215), "Dush – Shan: 08:30 – 18:30", font=get_font(24, bold=True), fill=COLOR_TEXT_MAIN, anchor="mm")
    draw.text((qr_right_x + qr_card_w / 2, 255), "Yakshanba: oldindan yozilish", font=get_font(18, bold=False), fill=COLOR_TEXT_MUTED, anchor="mm")
    
    return card.convert("RGB")

print("Rendering simple, clean, modern medical business cards...")

# Generate Simple White Edition
white_front = create_minimal_white_front()
white_back = create_minimal_white_back()

# Save PNGs and PDFs
white_front.save(os.path.join(PUBLIC_QR_DIR, "business_card_modern_front.png"), dpi=(600, 600))
white_front.save(os.path.join(PUBLIC_QR_DIR, "business_card_modern_front.pdf"), "PDF", resolution=600.0)
white_front.save(os.path.join(ARTIFACTS_DIR, "business_card_modern_front.png"), dpi=(600, 600))
white_front.save(os.path.join(ARTIFACTS_DIR, "business_card_modern_front.pdf"), "PDF", resolution=600.0)

white_back.save(os.path.join(PUBLIC_QR_DIR, "business_card_modern_back.png"), dpi=(600, 600))
white_back.save(os.path.join(PUBLIC_QR_DIR, "business_card_modern_back.pdf"), "PDF", resolution=600.0)
white_back.save(os.path.join(ARTIFACTS_DIR, "business_card_modern_back.png"), dpi=(600, 600))
white_back.save(os.path.join(ARTIFACTS_DIR, "business_card_modern_back.pdf"), "PDF", resolution=600.0)

# Double-Sided Combined PDF for Printing
white_front.save(
    os.path.join(PUBLIC_QR_DIR, "business_card_modern_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[white_back]
)
white_front.save(
    os.path.join(ARTIFACTS_DIR, "business_card_modern_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[white_back]
)

print("[OK] Simple Modern White Business Cards Generated Successfully!")

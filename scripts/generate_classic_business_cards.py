import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Target Dimensions: Standard 90x50 mm at 600 DPI
# Canvas internal size: 2126 x 1181 px
CARD_W = 2126
CARD_H = 1181

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

def draw_star(draw, center, size, fill="#F59E0B"):
    cx, cy = center
    points = []
    for i in range(10):
        angle = i * math.pi / 5 - math.pi / 2
        r = size if i % 2 == 0 else size * 0.44
        points.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(points, fill=fill)

def generate_minimal_qr(size=260):
    """Generates clean high-contrast website QR code."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=8,
        border=1,
    )
    qr.add_data(WEBSITE_URL)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#0B0F19", back_color="#FFFFFF").convert("RGBA")
    return img.resize((size, size), Image.Resampling.LANCZOS)

def draw_circle_icon(draw, center, radius, bg_fill, border_color, icon_type):
    """Draws a crisp minimalist circular contact icon."""
    cx, cy = center
    r = radius
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=bg_fill, outline=border_color, width=3)
    
    # Internal icon glyphs (pure vector shapes, zero emoji tofu boxes!)
    if icon_type == "phone":
        # Classic phone handset silhouette
        pw = int(r * 0.45)
        ph = int(r * 0.75)
        draw.rounded_rectangle([cx - pw, cy - ph, cx + pw, cy + ph], radius=int(pw * 0.5), fill="#FFFFFF")
        draw.ellipse([cx - int(pw * 0.4), cy + int(ph * 0.35), cx + int(pw * 0.4), cy + int(ph * 0.75)], fill=bg_fill)
        draw.rectangle([cx - int(pw * 0.5), cy - int(ph * 0.6), cx + int(pw * 0.5), cy - int(ph * 0.4)], fill=bg_fill)
    elif icon_type == "location":
        # Location pin
        lr = int(r * 0.45)
        draw.ellipse([cx - lr, cy - int(r * 0.65), cx + lr, cy + int(r * 0.15)], fill="#FFFFFF")
        pts = [(cx - lr, cy - int(r * 0.25)), (cx + lr, cy - int(r * 0.25)), (cx, cy + int(r * 0.65))]
        draw.polygon(pts, fill="#FFFFFF")
        draw.ellipse([cx - int(lr * 0.4), cy - int(r * 0.4), cx + int(lr * 0.4), cy - int(r * 0.1)], fill=bg_fill)
    elif icon_type == "telegram":
        # Telegram paper plane
        pts = [(cx - int(r * 0.5), cy - int(r * 0.05)), (cx + int(r * 0.55), cy - int(r * 0.45)), (cx - int(r * 0.1), cy + int(r * 0.5))]
        draw.polygon(pts, fill="#FFFFFF")
        pts2 = [(cx - int(r * 0.1), cy + int(r * 0.5)), (cx + int(r * 0.55), cy - int(r * 0.45)), (cx + int(r * 0.1), cy + int(r * 0.1))]
        draw.polygon(pts2, fill="#E2E8F0")
    elif icon_type == "instagram":
        # Instagram camera square
        iw = int(r * 0.5)
        draw.rounded_rectangle([cx - iw, cy - iw, cx + iw, cy + iw], radius=int(iw * 0.3), outline="#FFFFFF", width=3)
        draw.ellipse([cx - int(iw * 0.45), cy - int(iw * 0.45), cx + int(iw * 0.45), cy + int(iw * 0.45)], outline="#FFFFFF", width=3)
        draw.ellipse([cx + int(iw * 0.45), cy - int(iw * 0.65), cx + int(iw * 0.65), cy - int(iw * 0.45)], fill="#FFFFFF")
    elif icon_type == "website":
        # Globe / Web
        gr = int(r * 0.55)
        draw.ellipse([cx - gr, cy - gr, cx + gr, cy + gr], outline="#FFFFFF", width=3)
        draw.line([(cx - gr, cy), (cx + gr, cy)], fill="#FFFFFF", width=3)
        draw.line([(cx, cy - gr), (cx, cy + gr)], fill="#FFFFFF", width=3)
        draw.ellipse([cx - int(gr * 0.5), cy - gr, cx + int(gr * 0.5), cy + gr], outline="#FFFFFF", width=2)

# ==============================================================================
# 1. CLASSIC BLACK & RED EDITION (Image 1 Style)
# ==============================================================================

def create_classic_black_front():
    """
    Side 1 (Front): Classic Minimalist Black with Red Corner Arcs and Center Tooth Logo.
    Exactly matching the first uploaded reference style.
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), "#0B0F19")
    draw = ImageDraw.Draw(card)
    
    # Concentric curved arcs on Top-Left Corner
    r1, r2 = 360, 410
    draw.arc([-r1, -r1, r1, r1], start=0, end=90, fill="#252A36", width=24)
    draw.arc([-r2, -r2, r2, r2], start=0, end=90, fill="#C8102E", width=32)
    
    # Concentric curved arcs on Bottom-Right Corner
    draw.arc([CARD_W - r1, CARD_H - r1, CARD_W + r1, CARD_H + r1], start=180, end=270, fill="#252A36", width=24)
    draw.arc([CARD_W - r2, CARD_H - r2, CARD_W + r2, CARD_H + r2], start=180, end=270, fill="#C8102E", width=32)
    
    # Centered Logo (White/light DM tooth logo)
    try:
        logo_light = Image.open("frontend/public/logo_light.png").convert("RGBA")
        l_w = 480
        l_h = int(l_w * (logo_light.size[1] / logo_light.size[0]))
        logo_light = logo_light.resize((l_w, l_h), Image.Resampling.LANCZOS)
        card.paste(logo_light, ((CARD_W - l_w) // 2, 280), logo_light)
    except Exception:
        # Fallback text logo
        draw.text((CARD_W / 2, 380), "DM", font=get_font(120, bold=True), fill="#FFFFFF", anchor="mm")
        
    draw.text((CARD_W / 2, 730), "DM STOMATOLOGIYA", font=get_font(56, bold=True), fill="#FFFFFF", anchor="mm")
    draw.text((CARD_W / 2, 805), "ZAMONAVIY IMPLANTOLOGIYA VA ESTETIK STOMATOLOGIYA", font=get_font(26, bold=False), fill="#94A3B8", anchor="mm")
    
    # Subtle accent underline
    draw.rectangle([CARD_W / 2 - 160, 850, CARD_W / 2 + 160, 854], fill="#C8102E")
    draw.text((CARD_W / 2, 910), "Dr. MuhammadAli Davronov", font=get_font(38, bold=True), fill="#38BDF8", anchor="mm")
    
    return card.convert("RGB")

def create_classic_black_back():
    """
    Side 2 (Back): Classic Black with Red Dividing Arc, Left Logo + QR, Right Contacts.
    Exactly matching the first uploaded reference style.
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), "#0B0F19")
    draw = ImageDraw.Draw(card)
    
    # Elegant Curved Red Arc dividing Left 34% from Right 66%
    arc_cx = int(CARD_W * 0.14)
    arc_cy = CARD_H // 2
    rx = 620
    ry = 880
    
    # Charcoal shadow arc
    bbox_shadow = [arc_cx - rx - 16, arc_cy - ry, arc_cx + rx - 16, arc_cy + ry]
    draw.arc(bbox_shadow, start=-85, end=85, fill="#222834", width=48)
    
    # Crimson red arc
    bbox_red = [arc_cx - rx + 16, arc_cy - ry, arc_cx + rx + 16, arc_cy + ry]
    draw.arc(bbox_red, start=-85, end=85, fill="#C8102E", width=34)
    
    # ==================== LEFT SECTION (Logo + Website QR) ====================
    left_center_x = int(CARD_W * 0.18)
    
    # Clean Logo
    try:
        logo_icon = Image.open("frontend/public/logo_icon.png").convert("RGBA")
        l_sz = 170
        logo_icon = logo_icon.resize((l_sz, l_sz), Image.Resampling.LANCZOS)
        card.paste(logo_icon, (left_center_x - l_sz // 2, 110), logo_icon)
    except Exception:
        pass
        
    draw.text((left_center_x, 310), "DM STOMATOLOGIYA", font=get_font(28, bold=True), fill="#FFFFFF", anchor="mm")
    draw.text((left_center_x, 345), "Andijon", font=get_font(22, bold=False), fill="#94A3B8", anchor="mm")
    
    # Website QR Code
    qr_sz = 280
    qr_box_pad = 16
    qr_top = 420
    draw.rounded_rectangle(
        [left_center_x - qr_sz // 2 - qr_box_pad, qr_top - qr_box_pad, left_center_x + qr_sz // 2 + qr_box_pad, qr_top + qr_sz + qr_box_pad + 90],
        radius=20,
        fill="#FFFFFF",
        outline="#C8102E",
        width=3
    )
    
    qr_img = generate_minimal_qr(size=qr_sz)
    card.paste(qr_img, (left_center_x - qr_sz // 2, qr_top), qr_img)
    
    draw.text((left_center_x, qr_top + qr_sz + 25), "VEB-SAYTGA O'TISH", font=get_font(22, bold=True), fill="#0F172A", anchor="mm")
    draw.text((left_center_x, qr_top + qr_sz + 55), "Kamerani qarating", font=get_font(18, bold=False), fill="#C8102E", anchor="mm")
    draw.text((left_center_x, qr_top + qr_sz + 80), "stomatolog-muhammadali.uz", font=get_font(16, bold=False), fill="#64748B", anchor="mm")
    
    draw.text((left_center_x, 930), "5.0", font=get_font(32, bold=True), fill="#FBBF24", anchor="mm")
    for i in range(5):
        cx = left_center_x + (i - 2) * 24
        draw_star(draw, (cx, 980), 9, fill="#F59E0B")
    draw.text((left_center_x, 1020), "5 yillik tajriba", font=get_font(22, bold=False), fill="#94A3B8", anchor="mm")
    
    # ==================== RIGHT SECTION (Doctor Name & Contacts) ====================
    right_x = int(CARD_W * 0.44)
    
    # Doctor Header
    draw.text((right_x, 120), "Dr. MuhammadAli Davronov", font=get_font(60, bold=True), fill="#FFFFFF")
    draw.text((right_x, 195), "Andijon davlat tibbiyot institutining", font=get_font(26, bold=False), fill="#94A3B8")
    draw.text((right_x, 230), "Yuz-jag' jarrohligi klinik ordinatori", font=get_font(30, bold=True), fill="#38BDF8")
    
    draw.text((right_x, 280), "Implantolog  •  Ortoped  •  Stomatolog", font=get_font(28, bold=True), fill="#C8102E")
    
    # Horizontal divider line (like Image 1)
    draw.line([(right_x, 335), (CARD_W - 90, 335)], fill="#252A36", width=2)
    draw.line([(right_x, 335), (right_x + 280, 335)], fill="#C8102E", width=4)
    
    # Tagline (Like Image 1: "YOUR SMILE IS OUR PRIORITY")
    draw.text((right_x, 365), "TABASSUMINGIZ — BIZNING BOSH MAQSADIMIZ", font=get_font(24, bold=True), fill="#E2E8F0")
    
    # Minimalist Contact Rows with Circled Icons
    contacts = [
        ("location", "Manzil:", "Andijon sh., Prospekt, Navoiy sh., 91-uy (Sariq Bola pizza yonida)"),
        ("telegram", "Telegram:", "+998 97 676 01 01  (@dm_stomatology)"),
        ("instagram", "Instagram:", "@dm.muxammadali"),
        ("website", "Veb-sayt:", "https://stomatolog-muhammadali.uz"),
        ("phone", "Qabulga yozilish:", "+998 97 676 01 01   |   Ish tartibi: Dush-Shan 08:30-18:30"),
    ]
    
    row_y = 440
    icon_radius = 28
    for icon_type, label, value in contacts:
        icon_cx = right_x + 35
        icon_cy = row_y + 25
        
        # Draw circular icon with crimson accent
        draw_circle_icon(draw, (icon_cx, icon_cy), icon_radius, bg_fill="#181D2A", border_color="#C8102E", icon_type=icon_type)
        
        # Text details
        text_start_x = icon_cx + icon_radius + 28
        draw.text((text_start_x, row_y + 4), label, font=get_font(20, bold=False), fill="#94A3B8")
        
        val_color = "#FFFFFF"
        if icon_type == "phone":
            val_font = get_font(34, bold=True)
            val_color = "#38BDF8"
        elif icon_type == "instagram":
            val_font = get_font(28, bold=True)
            val_color = "#F472B6"
        else:
            val_font = get_font(26, bold=True)
            
        draw.text((text_start_x, row_y + 28), value, font=val_font, fill=val_color)
        row_y += 92
        
    # Concise 3 Service Pillars tags at very bottom
    draw.rectangle([right_x, CARD_H - 120, CARD_W - 90, CARD_H - 118], fill="#252A36")
    draw.text((right_x, CARD_H - 85), "• 1. Dental Implantologiya", font=get_font(24, bold=True), fill="#38BDF8")
    draw.text((right_x + 360, CARD_H - 85), "• 2. Sirkon & Vinirlar", font=get_font(24, bold=True), fill="#FBBF24")
    draw.text((right_x + 700, CARD_H - 85), "• 3. Og'riqsiz Terapiya", font=get_font(24, bold=True), fill="#4ADE80")
    
    return card.convert("RGB")

# ==============================================================================
# 2. MODERN MINIMAL WHITE EDITION (Image 2 & 3 Style)
# ==============================================================================

def create_classic_white_front():
    """
    Side 1 (Front): Clean Pristine White Medical Theme with Red & Navy Wave Accents.
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), "#FFFFFF")
    draw = ImageDraw.Draw(card)
    
    # Modern smooth wave accent on Top-Right & Bottom-Left (like Image 3)
    draw.pieslice([-300, CARD_H - 400, 400, CARD_H + 300], start=270, end=360, fill="#0B132B")
    draw.pieslice([-260, CARD_H - 360, 360, CARD_H + 260], start=270, end=360, fill="#C8102E")
    
    draw.pieslice([CARD_W - 400, -300, CARD_W + 300, 400], start=90, end=180, fill="#0B132B")
    draw.pieslice([CARD_W - 360, -260, CARD_W + 260, 360], start=90, end=180, fill="#C8102E")
    
    # Centered Logo (Classic DM logo)
    try:
        logo = Image.open("frontend/public/logo.png").convert("RGBA")
        l_w = 460
        l_h = int(l_w * (logo.size[1] / logo.size[0]))
        logo = logo.resize((l_w, l_h), Image.Resampling.LANCZOS)
        card.paste(logo, ((CARD_W - l_w) // 2, 280), logo)
    except Exception:
        draw.text((CARD_W / 2, 380), "DM", font=get_font(120, bold=True), fill="#C8102E", anchor="mm")
        
    draw.text((CARD_W / 2, 730), "DM STOMATOLOGIYA", font=get_font(56, bold=True), fill="#0F172A", anchor="mm")
    draw.text((CARD_W / 2, 805), "ZAMONAVIY IMPLANTOLOGIYA VA ESTETIK STOMATOLOGIYA", font=get_font(26, bold=False), fill="#64748B", anchor="mm")
    
    draw.rectangle([CARD_W / 2 - 160, 850, CARD_W / 2 + 160, 854], fill="#C8102E")
    draw.text((CARD_W / 2, 910), "Dr. MuhammadAli Davronov", font=get_font(38, bold=True), fill="#0284C7", anchor="mm")
    
    return card.convert("RGB")

def create_classic_white_back():
    """
    Side 2 (Back): Clean White Theme with Red Block Accent (Image 2 style).
    """
    card = Image.new("RGBA", (CARD_W, CARD_H), "#FFFFFF")
    draw = ImageDraw.Draw(card)
    
    # Left 34% White with QR & Logo
    left_center_x = int(CARD_W * 0.18)
    
    try:
        logo_icon = Image.open("frontend/public/logo_icon.png").convert("RGBA")
        l_sz = 170
        logo_icon = logo_icon.resize((l_sz, l_sz), Image.Resampling.LANCZOS)
        card.paste(logo_icon, (left_center_x - l_sz // 2, 110), logo_icon)
    except Exception:
        pass
        
    draw.text((left_center_x, 310), "DM STOMATOLOGIYA", font=get_font(28, bold=True), fill="#0F172A", anchor="mm")
    draw.text((left_center_x, 345), "Andijon", font=get_font(22, bold=False), fill="#64748B", anchor="mm")
    
    qr_sz = 280
    qr_top = 420
    qr_box_pad = 16
    draw.rounded_rectangle(
        [left_center_x - qr_sz // 2 - qr_box_pad, qr_top - qr_box_pad, left_center_x + qr_sz // 2 + qr_box_pad, qr_top + qr_sz + qr_box_pad + 90],
        radius=20,
        fill="#F8FAFC",
        outline="#E2E8F0",
        width=3
    )
    
    qr_img = generate_minimal_qr(size=qr_sz)
    card.paste(qr_img, (left_center_x - qr_sz // 2, qr_top), qr_img)
    
    draw.text((left_center_x, qr_top + qr_sz + 25), "VEB-SAYTGA O'TISH", font=get_font(22, bold=True), fill="#0F172A", anchor="mm")
    draw.text((left_center_x, qr_top + qr_sz + 55), "Kamerani qarating", font=get_font(18, bold=False), fill="#0284C7", anchor="mm")
    draw.text((left_center_x, qr_top + qr_sz + 80), "stomatolog-muhammadali.uz", font=get_font(16, bold=False), fill="#64748B", anchor="mm")
    
    draw.text((left_center_x, 930), "5.0", font=get_font(32, bold=True), fill="#D97706", anchor="mm")
    for i in range(5):
        cx = left_center_x + (i - 2) * 24
        draw_star(draw, (cx, 980), 9, fill="#F59E0B")
    draw.text((left_center_x, 1020), "5 yillik tajriba", font=get_font(22, bold=False), fill="#64748B", anchor="mm")
    
    # Red Arc dividing line
    arc_cx = int(CARD_W * 0.14)
    arc_cy = CARD_H // 2
    rx, ry = 620, 880
    draw.arc([arc_cx - rx - 16, arc_cy - ry, arc_cx + rx - 16, arc_cy + ry], start=-85, end=85, fill="#E2E8F0", width=48)
    draw.arc([arc_cx - rx + 16, arc_cy - ry, arc_cx + rx + 16, arc_cy + ry], start=-85, end=85, fill="#C8102E", width=34)
    
    # Right Contacts
    right_x = int(CARD_W * 0.44)
    draw.text((right_x, 120), "Dr. MuhammadAli Davronov", font=get_font(60, bold=True), fill="#0F172A")
    draw.text((right_x, 195), "Andijon davlat tibbiyot institutining", font=get_font(26, bold=False), fill="#64748B")
    draw.text((right_x, 230), "Yuz-jag' jarrohligi klinik ordinatori", font=get_font(30, bold=True), fill="#0284C7")
    draw.text((right_x, 280), "Implantolog  •  Ortoped  •  Stomatolog", font=get_font(28, bold=True), fill="#C8102E")
    
    draw.line([(right_x, 335), (CARD_W - 90, 335)], fill="#E2E8F0", width=2)
    draw.line([(right_x, 335), (right_x + 280, 335)], fill="#C8102E", width=4)
    draw.text((right_x, 365), "TABASSUMINGIZ — BIZNING BOSH MAQSADIMIZ", font=get_font(24, bold=True), fill="#334155")
    
    contacts = [
        ("location", "Manzil:", "Andijon sh., Prospekt, Navoiy sh., 91-uy (Sariq Bola pizza yonida)"),
        ("telegram", "Telegram:", "+998 97 676 01 01  (@dm_stomatology)"),
        ("instagram", "Instagram:", "@dm.muxammadali"),
        ("website", "Veb-sayt:", "https://stomatolog-muhammadali.uz"),
        ("phone", "Qabulga yozilish:", "+998 97 676 01 01   |   Ish tartibi: Dush-Shan 08:30-18:30"),
    ]
    
    row_y = 440
    icon_radius = 28
    for icon_type, label, value in contacts:
        icon_cx = right_x + 35
        icon_cy = row_y + 25
        draw_circle_icon(draw, (icon_cx, icon_cy), icon_radius, bg_fill="#C8102E", border_color="#C8102E", icon_type=icon_type)
        text_start_x = icon_cx + icon_radius + 28
        draw.text((text_start_x, row_y + 4), label, font=get_font(20, bold=False), fill="#64748B")
        
        val_color = "#0F172A"
        if icon_type == "phone":
            val_font = get_font(34, bold=True)
            val_color = "#0284C7"
        elif icon_type == "instagram":
            val_font = get_font(28, bold=True)
            val_color = "#E1306C"
        else:
            val_font = get_font(26, bold=True)
            
        draw.text((text_start_x, row_y + 28), value, font=val_font, fill=val_color)
        row_y += 92
        
    draw.rectangle([right_x, CARD_H - 120, CARD_W - 90, CARD_H - 118], fill="#E2E8F0")
    draw.text((right_x, CARD_H - 85), "• 1. Dental Implantologiya", font=get_font(24, bold=True), fill="#0284C7")
    draw.text((right_x + 360, CARD_H - 85), "• 2. Sirkon & Vinirlar", font=get_font(24, bold=True), fill="#D97706")
    draw.text((right_x + 700, CARD_H - 85), "• 3. Og'riqsiz Terapiya", font=get_font(24, bold=True), fill="#059669")
    
    return card.convert("RGB")

print("Rendering classic minimalist business cards...")

# 1. Classic Black Edition (Image 1 Style)
black_front = create_classic_black_front()
black_back = create_classic_black_back()

black_front.save(os.path.join(PUBLIC_QR_DIR, "business_card_classic_black_front.png"), dpi=(600, 600))
black_front.save(os.path.join(PUBLIC_QR_DIR, "business_card_classic_black_front.pdf"), "PDF", resolution=600.0)
black_front.save(os.path.join(ARTIFACTS_DIR, "business_card_classic_black_front.png"), dpi=(600, 600))
black_front.save(os.path.join(ARTIFACTS_DIR, "business_card_classic_black_front.pdf"), "PDF", resolution=600.0)

black_back.save(os.path.join(PUBLIC_QR_DIR, "business_card_classic_black_back.png"), dpi=(600, 600))
black_back.save(os.path.join(PUBLIC_QR_DIR, "business_card_classic_black_back.pdf"), "PDF", resolution=600.0)
black_back.save(os.path.join(ARTIFACTS_DIR, "business_card_classic_black_back.png"), dpi=(600, 600))
black_back.save(os.path.join(ARTIFACTS_DIR, "business_card_classic_black_back.pdf"), "PDF", resolution=600.0)

black_front.save(
    os.path.join(PUBLIC_QR_DIR, "business_card_classic_black_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[black_back]
)
black_front.save(
    os.path.join(ARTIFACTS_DIR, "business_card_classic_black_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[black_back]
)
print("[OK] Classic Black & Red Edition generated.")

# 2. Modern White Edition (Image 2 & 3 Style)
white_front = create_classic_white_front()
white_back = create_classic_white_back()

white_front.save(os.path.join(PUBLIC_QR_DIR, "business_card_classic_white_front.png"), dpi=(600, 600))
white_front.save(os.path.join(PUBLIC_QR_DIR, "business_card_classic_white_front.pdf"), "PDF", resolution=600.0)
white_front.save(os.path.join(ARTIFACTS_DIR, "business_card_classic_white_front.png"), dpi=(600, 600))
white_front.save(os.path.join(ARTIFACTS_DIR, "business_card_classic_white_front.pdf"), "PDF", resolution=600.0)

white_back.save(os.path.join(PUBLIC_QR_DIR, "business_card_classic_white_back.png"), dpi=(600, 600))
white_back.save(os.path.join(PUBLIC_QR_DIR, "business_card_classic_white_back.pdf"), "PDF", resolution=600.0)
white_back.save(os.path.join(ARTIFACTS_DIR, "business_card_classic_white_back.png"), dpi=(600, 600))
white_back.save(os.path.join(ARTIFACTS_DIR, "business_card_classic_white_back.pdf"), "PDF", resolution=600.0)

white_front.save(
    os.path.join(PUBLIC_QR_DIR, "business_card_classic_white_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[white_back]
)
white_front.save(
    os.path.join(ARTIFACTS_DIR, "business_card_classic_white_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[white_back]
)
print("[OK] Modern Minimal White Edition generated.")

print("\nALL CLASSIC BUSINESS CARDS COMPLETED!")

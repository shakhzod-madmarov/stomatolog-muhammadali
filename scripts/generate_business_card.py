import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Website URL for QR
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

def draw_star(draw, center, size, fill=(245, 158, 11)):
    """Draw a 5-pointed geometric star."""
    cx, cy = center
    points = []
    for i in range(10):
        angle = i * math.pi / 5 - math.pi / 2
        r = size if i % 2 == 0 else size * 0.44
        points.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(points, fill=fill)

def generate_website_qr(size=400):
    """Generates high-contrast QR code pointing to https://stomatolog-muhammadali.uz."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=2,
    )
    qr.add_data(WEBSITE_URL)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#0F172A", back_color="#FFFFFF").convert("RGBA")
    img = img.resize((size, size), Image.Resampling.LANCZOS)
    
    # Circular center badge with DM Stomatologiya logo icon
    badge_size = int(size * 0.24)
    badge = Image.new("RGBA", (badge_size, badge_size), (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(badge)
    bdraw.ellipse((0, 0, badge_size - 1, badge_size - 1), fill="#FFFFFF", outline="#0284C7", width=3)
    
    try:
        logo_icon = Image.open("frontend/public/logo_icon.png").convert("RGBA")
        inner_sz = int(badge_size * 0.75)
        logo_icon = logo_icon.resize((inner_sz, inner_sz), Image.Resampling.LANCZOS)
        badge.paste(logo_icon, ((badge_size - inner_sz) // 2, (badge_size - inner_sz) // 2), logo_icon)
    except Exception:
        font_dm = get_font(badge_size * 0.45, bold=True)
        bdraw.text((badge_size / 2, badge_size / 2 - 2), "DM", font=font_dm, fill="#C8102E", anchor="mm")
        
    pos = ((size - badge_size) // 2, (size - badge_size) // 2)
    img.paste(badge, pos, badge)
    return img

def create_circular_portrait(size=260):
    """Loads dr_muhammadali.png and returns a circular framed portrait."""
    try:
        doc = Image.open("frontend/public/dr_muhammadali.png").convert("RGBA")
        # Crop square around head
        w, h = doc.size
        min_dim = min(w, h)
        left = (w - min_dim) // 2
        top = 20  # focus slightly towards top where face is
        box = (left, top, left + min_dim, top + min_dim)
        doc = doc.crop(box).resize((size, size), Image.Resampling.LANCZOS)
        
        mask = Image.new("L", (size, size), 0)
        mdraw = ImageDraw.Draw(mask)
        mdraw.ellipse((0, 0, size - 1, size - 1), fill=255)
        
        framed = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        framed.paste(doc, (0, 0), mask)
        
        # Outer ring
        ring = Image.new("RGBA", (size + 16, size + 16), (0, 0, 0, 0))
        rdraw = ImageDraw.Draw(ring)
        rdraw.ellipse((0, 0, size + 15, size + 15), fill="#0284C7", outline="#38BDF8", width=4)
        ring.paste(framed, (8, 8), framed)
        return ring
    except Exception as e:
        print("Portrait error:", e)
        return None

def draw_phone_icon(draw, center, size, fill="#FFFFFF"):
    cx, cy = center
    draw.rounded_rectangle([cx - size // 2, cy - int(size * 0.8), cx + size // 2, cy + int(size * 0.8)], radius=int(size * 0.25), fill=fill)
    draw.ellipse([cx - int(size * 0.2), cy + int(size * 0.4), cx + int(size * 0.2), cy + int(size * 0.7)], fill="#0A192F")

def draw_telegram_icon(draw, center, size):
    cx, cy = center
    draw.ellipse([cx - size // 2, cy - size // 2, cx + size // 2, cy + size // 2], fill="#0284C7")
    # Paper plane triangle
    pts = [(cx - size * 0.28, cy), (cx + size * 0.32, cy - size * 0.25), (cx - size * 0.05, cy + size * 0.28)]
    draw.polygon(pts, fill="#FFFFFF")

def draw_instagram_icon(draw, center, size):
    cx, cy = center
    draw.rounded_rectangle([cx - size // 2, cy - size // 2, cx + size // 2, cy + size // 2], radius=int(size * 0.3), fill="#E1306C")
    draw.ellipse([cx - int(size * 0.25), cy - int(size * 0.25), cx + int(size * 0.25), cy + int(size * 0.25)], outline="#FFFFFF", width=3)
    draw.ellipse([cx + int(size * 0.2), cy - int(size * 0.3), cx + int(size * 0.3), cy - int(size * 0.2)], fill="#FFFFFF")

def draw_location_icon(draw, center, size, fill="#C8102E"):
    cx, cy = center
    r = int(size * 0.45)
    draw.ellipse([cx - r, cy - int(size * 0.7), cx + r, cy + int(size * 0.2)], fill=fill)
    pts = [(cx - r, cy - int(size * 0.3)), (cx + r, cy - int(size * 0.3)), (cx, cy + int(size * 0.7))]
    draw.polygon(pts, fill=fill)
    draw.ellipse([cx - int(r * 0.45), cy - int(size * 0.45), cx + int(r * 0.45), cy - int(size * 0.05)], fill="#FFFFFF")

def create_business_card_front_dark(width=2126, height=1181):
    """
    Standard Business Card 90x50 mm at 600 DPI (2126 x 1181 px).
    Front side - Luxury Deep Navy Medical Theme.
    """
    card = Image.new("RGBA", (width, height), "#0A192F")
    draw = ImageDraw.Draw(card)
    
    # 1. Background geometric design (Crimson & Sky accents)
    draw.polygon([(0, 0), (int(width * 0.42), 0), (int(width * 0.28), height), (0, height)], fill="#0D1E3A")
    draw.line([(int(width * 0.42), 0), (int(width * 0.28), height)], fill="#0284C7", width=6)
    draw.line([(int(width * 0.435), 0), (int(width * 0.295), height)], fill="#C8102E", width=4)
    
    # Top right subtle accent glow
    draw.rectangle([width - 8, 0, width, height], fill="#C8102E")
    draw.rectangle([0, 0, width, 8], fill="#0284C7")
    
    # 2. Doctor portrait (Circular framed)
    portrait = create_circular_portrait(size=280)
    if portrait:
        card.paste(portrait, (70, 70), portrait)
        
    # 3. Doctor Info & Credentials
    text_x = 390
    draw.text((text_x, 80), "DM STOMATOLOGIYA", font=get_font(34, bold=True), fill="#38BDF8")
    draw.text((text_x, 135), "Dr. MuhammadAli Davronov", font=get_font(62, bold=True), fill="#FFFFFF")
    
    # Mandatory exact qualification title
    draw.text((text_x, 220), "Andijon davlat tibbiyot institutining", font=get_font(28, bold=False), fill="#94A3B8")
    draw.text((text_x, 260), "Yuz-jag' jarrohligi klinik ordinatori", font=get_font(32, bold=True), fill="#E2E8F0")
    
    # Specializations banner
    draw.rounded_rectangle([text_x, 320, text_x + 920, 395], radius=14, fill="#1E293B", outline="#334155", width=2)
    draw.text((text_x + 25, 345), "Implantolog  •  Ortoped  •  Jarroh", font=get_font(34, bold=True), fill="#38BDF8")
    draw.text((text_x + 640, 348), "|  5 yillik tajriba", font=get_font(28, bold=False), fill="#FBBF24")
    
    # 5 stars
    for i in range(5):
        cx = text_x + 830 + i * 22
        draw_star(draw, (cx, 362), 9, fill="#F59E0B")
        
    # 4. QR Code Block (Right side)
    qr_w = 340
    qr_h = 430
    qr_x = width - qr_w - 70
    qr_y = 65
    draw.rounded_rectangle([qr_x, qr_y, qr_x + qr_w, qr_y + qr_h], radius=24, fill="#FFFFFF", outline="#0284C7", width=3)
    
    qr_img = generate_website_qr(size=270)
    card.paste(qr_img, (qr_x + (qr_w - 270) // 2, qr_y + 25), qr_img)
    
    draw.text((qr_x + qr_w / 2, qr_y + 325), "VEB-SAYT VA QABUL", font=get_font(24, bold=True), fill="#0F172A", anchor="mm")
    draw.text((qr_x + qr_w / 2, qr_y + 360), "Kamerani qarating", font=get_font(20, bold=False), fill="#0284C7", anchor="mm")
    draw.text((qr_x + qr_w / 2, qr_y + 395), "stomatolog-muhammadali.uz", font=get_font(18, bold=True), fill="#64748B", anchor="mm")
    
    # 5. Middle separator
    sep_y = 445
    draw.line([(70, sep_y), (width - 70, sep_y)], fill="#1E293B", width=2)
    draw.line([(70, sep_y), (350, sep_y)], fill="#0284C7", width=4)
    
    # 6. Contact Information Grid (Bottom Area)
    # Column 1: Phone & Telegram
    c1_x = 90
    c1_y = 485
    # Phone Icon
    draw.rounded_rectangle([c1_x, c1_y, c1_x + 48, c1_y + 48], radius=10, fill="#0284C7")
    draw.text((c1_x + 24, c1_y + 24), "📞", font=get_font(22), anchor="mm")
    draw.text((c1_x + 65, c1_y + 5), "Telefon / Qabul:", font=get_font(22, bold=False), fill="#94A3B8")
    draw.text((c1_x + 65, c1_y + 30), "+998 97 676 01 01", font=get_font(36, bold=True), fill="#FFFFFF")
    
    # Telegram
    t_y = c1_y + 85
    draw.ellipse([c1_x, t_y, c1_x + 48, t_y + 48], fill="#0284C7")
    draw.text((c1_x + 24, t_y + 24), "✈", font=get_font(24), anchor="mm")
    draw.text((c1_x + 65, t_y + 5), "Telegram:", font=get_font(22, bold=False), fill="#94A3B8")
    draw.text((c1_x + 65, t_y + 30), "+998 97 676 01 01  (@dm_stomatology)", font=get_font(30, bold=True), fill="#38BDF8")
    
    # Column 2: Instagram & Website
    c2_x = 780
    draw.rounded_rectangle([c2_x, c1_y, c2_x + 48, c1_y + 48], radius=12, fill="#E1306C")
    draw.text((c2_x + 24, c1_y + 24), "📸", font=get_font(22), anchor="mm")
    draw.text((c2_x + 65, c1_y + 5), "Instagram:", font=get_font(22, bold=False), fill="#94A3B8")
    draw.text((c2_x + 65, c1_y + 30), "@dm.muxammadali", font=get_font(34, bold=True), fill="#F472B6")
    
    # Website
    w_y = c1_y + 85
    draw.ellipse([c2_x, w_y, c2_x + 48, w_y + 48], fill="#0F766E")
    draw.text((c2_x + 24, w_y + 24), "🌐", font=get_font(22), anchor="mm")
    draw.text((c2_x + 65, w_y + 5), "Rasmiy Veb-Sayt:", font=get_font(22, bold=False), fill="#94A3B8")
    draw.text((c2_x + 65, w_y + 30), "stomatolog-muhammadali.uz", font=get_font(30, bold=True), fill="#2DD4BF")
    
    # Column 3: Working Hours
    c3_x = 1450
    draw.rounded_rectangle([c3_x, c1_y, c3_x + 48, c1_y + 48], radius=10, fill="#D97706")
    draw.text((c3_x + 24, c1_y + 24), "⏰", font=get_font(22), anchor="mm")
    draw.text((c3_x + 65, c1_y + 5), "Ish tartibi:", font=get_font(22, bold=False), fill="#94A3B8")
    draw.text((c3_x + 65, c1_y + 30), "Dush – Shan: 08:30 – 18:30", font=get_font(30, bold=True), fill="#FDE047")
    draw.text((c3_x + 65, w_y + 15), "Yakshanba: oldindan yozilish", font=get_font(24, bold=False), fill="#CBD5E1")
    
    # 7. Bottom Address Bar
    bar_y = height - 120
    draw.rectangle([0, bar_y, width, height], fill="#071224")
    draw.rectangle([0, bar_y, width, bar_y + 4], fill="#C8102E")
    
    draw.text((90, bar_y + 45), "📍 MANZIL:", font=get_font(24, bold=True), fill="#C8102E")
    draw.text((220, bar_y + 45), "Andijon shahri, Prospekt, Navoiy shoh ko'chasi, 91-uy  (SARIQ BOLA pizza yonida)", font=get_font(26, bold=False), fill="#FFFFFF")
    draw.text((width - 90, bar_y + 45), "DM Stomatologiya", font=get_font(24, bold=True), fill="#38BDF8", anchor="ra")
    
    return card.convert("RGB")

def create_business_card_back_services(width=2126, height=1181):
    """
    Business Card Back Side - Comprehensive Dental Services & Clinical Pillars.
    Pristine white medical card with structured service categories.
    """
    card = Image.new("RGBA", (width, height), "#FFFFFF")
    draw = ImageDraw.Draw(card)
    
    # Top banner with DM Stomatologiya branding
    top_h = 170
    draw.rectangle([0, 0, width, top_h], fill="#0A192F")
    draw.rectangle([0, top_h, width, top_h + 8], fill="#C8102E")
    
    # Clinic Logo on top left
    try:
        logo_light = Image.open("frontend/public/logo_light.png").convert("RGBA")
        l_w = int(top_h * 1.3)
        l_h = int(l_w * (logo_light.size[1] / logo_light.size[0]))
        logo_light = logo_light.resize((l_w, l_h), Image.Resampling.LANCZOS)
        card.paste(logo_light, (70, (top_h - l_h) // 2), logo_light)
    except Exception:
        draw.text((70, 60), "DM STOMATOLOGIYA", font=get_font(38, bold=True), fill="#FFFFFF")
        
    draw.text((width / 2, 60), "STOMATOLOGIK XIZMATLAR RO'YXATI", font=get_font(44, bold=True), fill="#FFFFFF", anchor="mm")
    draw.text((width / 2, 115), "Dr. MuhammadAli Davronov shaxsiy qabuli • Zamonaviy 3D stomatologiya", font=get_font(26, bold=False), fill="#94A3B8", anchor="mm")
    
    # 3 Service Pillar Columns
    col_w = 620
    col_gap = 45
    col_top = 230
    col_h = 760
    
    col1_x = 70
    col2_x = col1_x + col_w + col_gap
    col3_x = col2_x + col_w + col_gap
    
    # ==================== PILLAR 1: DENTAL IMPLANTOLOGIYA (#1 HAR DOIM) ====================
    draw.rounded_rectangle([col1_x, col_top, col1_x + col_w, col_top + col_h], radius=20, fill="#F8FAFC", outline="#BFDBFE", width=3)
    # Header badge
    draw.rounded_rectangle([col1_x, col_top, col1_x + col_w, col_top + 90], radius=20, fill="#EFF6FF")
    draw.rectangle([col1_x, col_top + 45, col1_x + col_w, col_top + 90], fill="#EFF6FF")
    draw.text((col1_x + col_w / 2, col_top + 45), "1. DENTAL IMPLANTOLOGIYA", font=get_font(30, bold=True), fill="#1E40AF", anchor="mm")
    
    services_1 = [
        ("Biotitan implantlar", "Dentium, Osstem, DIO tizimlari"),
        ("1 bosqichli implantatsiya", "Tish olingan zahoti o'rnatish"),
        ("Sinus-lifting & Suyak plastikasi", "Suyak to'qimasini ko'paytirish"),
        ("To'liq jag' implantatsiyasi", "All-on-4 va All-on-6 konsepsiyasi"),
        ("Kafolatlangan o'rnatish", "Yuqori darajadagi ildiz otish"),
    ]
    
    s_y = col_top + 125
    for title, desc in services_1:
        draw.ellipse([col1_x + 30, s_y + 12, col1_x + 44, s_y + 26], fill="#0284C7")
        draw.text((col1_x + 60, s_y), title, font=get_font(26, bold=True), fill="#0F172A")
        draw.text((col1_x + 60, s_y + 36), desc, font=get_font(22, bold=False), fill="#64748B")
        s_y += 105
        
    # ==================== PILLAR 2: ORTOPEDIYA & ESTETIKA ====================
    draw.rounded_rectangle([col2_x, col_top, col2_x + col_w, col_top + col_h], radius=20, fill="#F8FAFC", outline="#FECACA", width=3)
    draw.rounded_rectangle([col2_x, col_top, col2_x + col_w, col_top + 90], radius=20, fill="#FEF2F2")
    draw.rectangle([col2_x, col_top + 45, col2_x + col_w, col_top + 90], fill="#FEF2F2")
    draw.text((col2_x + col_w / 2, col_top + 45), "2. ORTOPEDIYA VA ESTETIKA", font=get_font(30, bold=True), fill="#991B1B", anchor="mm")
    
    services_2 = [
        ("Sirkon koronkalar", "Monolit va qatlamli sirkon qoplama"),
        ("E-max keramik vinirlar", "Tabiiy go'zal 'Golivud' tabassumi"),
        ("Metallokeramika tojlari", "Mustahkam va chidamli qoplamalar"),
        ("Olinadigan protezlar", "Byugel va neylon yumshoq protezlar"),
        ("Kompensator va vkladkalar", "Tish shaklini mukammal tiklash"),
    ]
    
    s_y = col_top + 125
    for title, desc in services_2:
        draw.ellipse([col2_x + 30, s_y + 12, col2_x + 44, s_y + 26], fill="#C8102E")
        draw.text((col2_x + 60, s_y), title, font=get_font(26, bold=True), fill="#0F172A")
        draw.text((col2_x + 60, s_y + 36), desc, font=get_font(22, bold=False), fill="#64748B")
        s_y += 105
        
    # ==================== PILLAR 3: TERAPIYA & JARROHLIK ====================
    draw.rounded_rectangle([col3_x, col_top, col3_x + col_w, col_top + col_h], radius=20, fill="#F8FAFC", outline="#A7F3D0", width=3)
    draw.rounded_rectangle([col3_x, col_top, col3_x + col_w, col_top + 90], radius=20, fill="#ECFDF5")
    draw.rectangle([col3_x, col_top + 45, col3_x + col_w, col_top + 90], fill="#ECFDF5")
    draw.text((col3_x + col_w / 2, col_top + 45), "3. TERAPIYA VA JARROHLIK", font=get_font(30, bold=True), fill="#065F46", anchor="mm")
    
    services_3 = [
        ("100% og'riqsiz davolash", "Karies va pulsatsiyasiz behushlik"),
        ("Ildiz kanallari terapiyasi", "Endodontik mukammal tozalash"),
        ("Professional tish oqartirish", "Air Flow va ultratovushli tozalash"),
        ("Estetik restavratsiya", "Nurli kompozit plombalar bilan"),
        ("Murakkab tishlarni olish", "Aql tishlari va ildiz jarrohligi"),
    ]
    
    s_y = col_top + 125
    for title, desc in services_3:
        draw.ellipse([col3_x + 30, s_y + 12, col3_x + 44, s_y + 26], fill="#059669")
        draw.text((col3_x + 60, s_y), title, font=get_font(26, bold=True), fill="#0F172A")
        draw.text((col3_x + 60, s_y + 36), desc, font=get_font(22, bold=False), fill="#64748B")
        s_y += 105
        
    # Bottom Booking & Clinic Footer
    b_y = height - 130
    draw.rectangle([0, b_y, width, height], fill="#0A192F")
    draw.rectangle([0, b_y, width, b_y + 5], fill="#0284C7")
    
    draw.text((90, b_y + 40), "QABULGA YOZILISH:", font=get_font(24, bold=True), fill="#38BDF8")
    draw.text((370, b_y + 38), "+998 97 676 01 01", font=get_font(34, bold=True), fill="#FFFFFF")
    draw.text((800, b_y + 42), "Telegram: @dm_stomatology", font=get_font(24, bold=False), fill="#E2E8F0")
    draw.text((1250, b_y + 42), "Instagram: @dm.muxammadali", font=get_font(24, bold=False), fill="#F472B6")
    draw.text((width - 90, b_y + 42), "stomatolog-muhammadali.uz", font=get_font(26, bold=True), fill="#2DD4BF", anchor="ra")
    
    return card.convert("RGB")

def create_business_card_front_light(width=2126, height=1181):
    """
    Alternative Front Side - Clean Elegant White Medical Theme.
    """
    card = Image.new("RGBA", (width, height), "#FFFFFF")
    draw = ImageDraw.Draw(card)
    
    # Left colored accent border
    draw.rectangle([0, 0, 16, height], fill="#C8102E")
    draw.rectangle([16, 0, 32, height], fill="#0284C7")
    
    # Top Logo
    try:
        logo = Image.open("frontend/public/logo.png").convert("RGBA")
        l_w = 320
        l_h = int(l_w * (logo.size[1] / logo.size[0]))
        logo = logo.resize((l_w, l_h), Image.Resampling.LANCZOS)
        card.paste(logo, (90, 70), logo)
    except Exception:
        draw.text((90, 80), "DM STOMATOLOGIYA", font=get_font(38, bold=True), fill="#0F172A")
        
    # Doctor portrait (Circular framed)
    portrait = create_circular_portrait(size=260)
    if portrait:
        card.paste(portrait, (90, 240), portrait)
        
    text_x = 400
    draw.text((text_x, 240), "Dr. MuhammadAli Davronov", font=get_font(58, bold=True), fill="#0F172A")
    draw.text((text_x, 320), "Andijon davlat tibbiyot institutining", font=get_font(26, bold=False), fill="#64748B")
    draw.text((text_x, 355), "Yuz-jag' jarrohligi klinik ordinatori", font=get_font(30, bold=True), fill="#0F172A")
    draw.text((text_x, 410), "Implantolog  •  Ortoped  •  Stomatolog", font=get_font(30, bold=True), fill="#0284C7")
    
    # Stars
    for i in range(5):
        cx = text_x + 650 + i * 22
        draw_star(draw, (cx, 426), 9, fill="#F59E0B")
    draw.text((text_x + 770, 426), "(5 yillik tajriba)", font=get_font(22, bold=False), fill="#94A3B8", anchor="lm")
    
    # QR Code Block (Right side)
    qr_w = 340
    qr_h = 430
    qr_x = width - qr_w - 90
    qr_y = 90
    draw.rounded_rectangle([qr_x, qr_y, qr_x + qr_w, qr_y + qr_h], radius=24, fill="#F8FAFC", outline="#E2E8F0", width=3)
    
    qr_img = generate_website_qr(size=270)
    card.paste(qr_img, (qr_x + (qr_w - 270) // 2, qr_y + 25), qr_img)
    
    draw.text((qr_x + qr_w / 2, qr_y + 325), "VEB-SAYT VA QABUL", font=get_font(24, bold=True), fill="#0F172A", anchor="mm")
    draw.text((qr_x + qr_w / 2, qr_y + 360), "Kamerani qarating", font=get_font(20, bold=False), fill="#0284C7", anchor="mm")
    draw.text((qr_x + qr_w / 2, qr_y + 395), "stomatolog-muhammadali.uz", font=get_font(18, bold=True), fill="#64748B", anchor="mm")
    
    # Divider
    draw.line([(90, 560), (width - 90, 560)], fill="#E2E8F0", width=2)
    
    # Contacts
    c1_x = 90
    c1_y = 610
    draw.text((c1_x, c1_y), "Telefon:", font=get_font(22, bold=False), fill="#64748B")
    draw.text((c1_x, c1_y + 30), "+998 97 676 01 01", font=get_font(34, bold=True), fill="#0F172A")
    draw.text((c1_x, c1_y + 90), "Telegram: +998 97 676 01 01 (@dm_stomatology)", font=get_font(26, bold=False), fill="#0284C7")
    
    c2_x = 800
    draw.text((c2_x, c1_y), "Instagram:", font=get_font(22, bold=False), fill="#64748B")
    draw.text((c2_x, c1_y + 30), "@dm.muxammadali", font=get_font(34, bold=True), fill="#E1306C")
    draw.text((c2_x, c1_y + 90), "Veb-sayt: stomatolog-muhammadali.uz", font=get_font(26, bold=False), fill="#0F766E")
    
    c3_x = 1450
    draw.text((c3_x, c1_y), "Ish tartibi:", font=get_font(22, bold=False), fill="#64748B")
    draw.text((c3_x, c1_y + 30), "Dush – Shan: 08:30 – 18:30", font=get_font(30, bold=True), fill="#0F172A")
    draw.text((c3_x, c1_y + 90), "Yakshanba: oldindan yozilish", font=get_font(24, bold=False), fill="#64748B")
    
    # Bottom Address
    bar_y = height - 120
    draw.rectangle([0, bar_y, width, height], fill="#F8FAFC")
    draw.rectangle([0, bar_y, width, bar_y + 2], fill="#E2E8F0")
    draw.text((90, bar_y + 45), "📍 MANZIL:", font=get_font(24, bold=True), fill="#C8102E")
    draw.text((220, bar_y + 45), "Andijon shahri, Prospekt, Navoiy shoh ko'chasi, 91-uy  (SARIQ BOLA pizza yonida)", font=get_font(26, bold=False), fill="#0F172A")
    
    return card.convert("RGB")

print("Rendering business cards...")

# 1. Standalone Website QR code (1200x1200 px)
qr_web = generate_website_qr(size=1200)
qr_web.save(os.path.join(PUBLIC_QR_DIR, "website_qr.png"))
qr_web.save(os.path.join(ARTIFACTS_DIR, "website_qr.png"))
print("[OK] Website QR generated.")

# 2. Business Card Front (Dark Luxury Theme)
card_front_dark = create_business_card_front_dark()
card_front_dark.save(os.path.join(PUBLIC_QR_DIR, "business_card_front_dark.png"), dpi=(600, 600))
card_front_dark.save(os.path.join(PUBLIC_QR_DIR, "business_card_front_dark.pdf"), "PDF", resolution=600.0)
card_front_dark.save(os.path.join(ARTIFACTS_DIR, "business_card_front_dark.png"), dpi=(600, 600))
card_front_dark.save(os.path.join(ARTIFACTS_DIR, "business_card_front_dark.pdf"), "PDF", resolution=600.0)
print("[OK] Front Dark card generated.")

# 3. Business Card Front (Light Clean Theme)
card_front_light = create_business_card_front_light()
card_front_light.save(os.path.join(PUBLIC_QR_DIR, "business_card_front_light.png"), dpi=(600, 600))
card_front_light.save(os.path.join(PUBLIC_QR_DIR, "business_card_front_light.pdf"), "PDF", resolution=600.0)
card_front_light.save(os.path.join(ARTIFACTS_DIR, "business_card_front_light.png"), dpi=(600, 600))
card_front_light.save(os.path.join(ARTIFACTS_DIR, "business_card_front_light.pdf"), "PDF", resolution=600.0)
print("[OK] Front Light card generated.")

# 4. Business Card Back (Services & Clinical Pillars)
card_back = create_business_card_back_services()
card_back.save(os.path.join(PUBLIC_QR_DIR, "business_card_back_services.png"), dpi=(600, 600))
card_back.save(os.path.join(PUBLIC_QR_DIR, "business_card_back_services.pdf"), "PDF", resolution=600.0)
card_back.save(os.path.join(ARTIFACTS_DIR, "business_card_back_services.png"), dpi=(600, 600))
card_back.save(os.path.join(ARTIFACTS_DIR, "business_card_back_services.pdf"), "PDF", resolution=600.0)
print("[OK] Back Services card generated.")

# 5. Combined Double-Sided PDF (Page 1: Front, Page 2: Back)
card_front_dark.save(
    os.path.join(PUBLIC_QR_DIR, "business_card_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[card_back]
)
card_front_dark.save(
    os.path.join(ARTIFACTS_DIR, "business_card_double_sided.pdf"),
    "PDF",
    resolution=600.0,
    save_all=True,
    append_images=[card_back]
)
print("[OK] Double-sided print-ready PDF generated.")

print("\nALL BUSINESS CARD ASSETS GENERATED SUCCESSFULLY!")

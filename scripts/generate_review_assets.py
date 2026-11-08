import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

# URLs
GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJw2lUo44vtTgR64uD1Pj44tE"
YANDEX_REVIEW_URL = "https://yandex.uz/maps/org/stomatologiya/214793392317/reviews/"

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
    """Draw a 5-pointed star."""
    cx, cy = center
    points = []
    for i in range(10):
        angle = i * math.pi / 5 - math.pi / 2
        r = size if i % 2 == 0 else size * 0.44
        points.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(points, fill=fill)

def generate_qr(url, size=600, badge_type=None):
    """Generates a high-contrast, scannable QR code with an optional center badge."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=3,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#0F172A", back_color="#FFFFFF").convert("RGBA")
    img = img.resize((size, size), Image.Resampling.LANCZOS)
    
    if badge_type:
        badge_size = int(size * 0.22)
        badge = Image.new("RGBA", (badge_size, badge_size), (0, 0, 0, 0))
        bdraw = ImageDraw.Draw(badge)
        bdraw.ellipse((0, 0, badge_size - 1, badge_size - 1), fill="#FFFFFF", outline="#E2E8F0", width=4)
        inner_pad = int(badge_size * 0.12)
        
        if badge_type == "google":
            bdraw.ellipse((inner_pad, inner_pad, badge_size - 1 - inner_pad, badge_size - 1 - inner_pad), fill="#4285F4")
            font_g = get_font(badge_size * 0.52, bold=True)
            bdraw.text((badge_size / 2, badge_size / 2 - 2), "G", font=font_g, fill="#FFFFFF", anchor="mm")
        elif badge_type == "yandex":
            bdraw.ellipse((inner_pad, inner_pad, badge_size - 1 - inner_pad, badge_size - 1 - inner_pad), fill="#FC3F1D")
            font_y = get_font(badge_size * 0.52, bold=True)
            bdraw.text((badge_size / 2, badge_size / 2 - 2), "Я", font=font_y, fill="#FFFFFF", anchor="mm")
            
        pos = ((size - badge_size) // 2, (size - badge_size) // 2)
        img.paste(badge, pos, badge)
        
    return img

def create_vertical_card(width=1748, height=2480, scale=1.0):
    """
    Creates a vertical table stand / tent card (A5: 1748x2480, A4: 2480x3508).
    Designed specifically for dental clinic reception and patient tables.
    """
    card = Image.new("RGBA", (width, height), "#FFFFFF")
    draw = ImageDraw.Draw(card)
    
    # 1. Subtle elegant top gradient header banner
    header_h = int(320 * scale)
    for y in range(header_h):
        alpha = int(255 * (1 - y / header_h * 0.8))
        # Deep medical navy #0A192F to #0F172A
        r, g, b = int(10 + y * 0.02), int(25 + y * 0.05), int(47 + y * 0.08)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))
        
    # Accent cyan line under header
    accent_y = header_h
    draw.rectangle([0, accent_y, width, accent_y + int(8 * scale)], fill="#0284C7")
    
    # Header Branding Text
    font_brand = get_font(52 * scale, bold=True)
    font_doctor = get_font(72 * scale, bold=True)
    font_spec = get_font(34 * scale, bold=False)
    
    draw.text((width / 2, int(70 * scale)), "DM STOMATOLOGIYA", font=font_brand, fill="#38BDF8", anchor="mm")
    draw.text((width / 2, int(155 * scale)), "Dr. MuhammadAli Davronov", font=font_doctor, fill="#FFFFFF", anchor="mm")
    draw.text((width / 2, int(235 * scale)), "Yuz-jag' jarrohi • Implantolog • Ortoped", font=font_spec, fill="#E2E8F0", anchor="mm")
    
    # 2. Main Call to Action Block
    cta_y = int(410 * scale)
    font_cta_title = get_font(64 * scale, bold=True)
    draw.text((width / 2, cta_y), "QABULIMIZDAN MAMNUNMISIZ?", font=font_cta_title, fill="#0F172A", anchor="mm")
    
    # Stars (5 Golden Stars)
    star_y = int(500 * scale)
    star_spacing = int(75 * scale)
    star_size = int(30 * scale)
    for i in range(5):
        cx = width / 2 + (i - 2) * star_spacing
        draw_star(draw, (cx, star_y), star_size, fill="#F59E0B")
        
    font_sub_uz = get_font(38 * scale, bold=False)
    font_sub_ru = get_font(32 * scale, bold=False)
    draw.text((width / 2, int(590 * scale)), "Fikringiz biz uchun juda muhim! 5★ baho bering va sharh qoldiring", font=font_sub_uz, fill="#334155", anchor="mm")
    draw.text((width / 2, int(645 * scale)), "Оцените наш приём на 5 звёзд и оставьте ваш отзыв", font=font_sub_ru, fill="#64748B", anchor="mm")
    
    # 3. Two QR Cards (Google and Yandex)
    qr_box_w = int(720 * scale)
    qr_box_h = int(980 * scale)
    qr_top = int(730 * scale)
    
    box_gap = int(70 * scale)
    left_x = int((width - (qr_box_w * 2 + box_gap)) / 2)
    right_x = left_x + qr_box_w + box_gap
    
    # Box 1: Google Maps
    # Card background with border
    draw.rounded_rectangle([left_x, qr_top, left_x + qr_box_w, qr_top + qr_box_h], radius=int(28 * scale), fill="#F8FAFC", outline="#BFDBFE", width=int(4 * scale))
    # Top badge pill
    pill_w = int(380 * scale)
    pill_h = int(60 * scale)
    pill_x = left_x + (qr_box_w - pill_w) // 2
    pill_y = qr_top + int(40 * scale)
    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=int(30 * scale), fill="#EFF6FF", outline="#60A5FA", width=int(2 * scale))
    font_pill = get_font(30 * scale, bold=True)
    draw.text((pill_x + pill_w / 2, pill_y + pill_h / 2), "GOOGLE XARITALAR", font=font_pill, fill="#1D4ED8", anchor="mm")
    
    font_card_head = get_font(42 * scale, bold=True)
    draw.text((left_x + qr_box_w / 2, qr_top + int(150 * scale)), "Google Maps", font=font_card_head, fill="#0F172A", anchor="mm")
    
    # Generate Google QR
    qr_size = int(520 * scale)
    google_qr = generate_qr(GOOGLE_REVIEW_URL, size=qr_size, badge_type="google")
    card.paste(google_qr, (left_x + (qr_box_w - qr_size) // 2, qr_top + int(210 * scale)), google_qr)
    
    # Scan instruction
    font_scan = get_font(30 * scale, bold=True)
    font_scan_ru = get_font(26 * scale, bold=False)
    draw.text((left_x + qr_box_w / 2, qr_top + int(790 * scale)), "📷 Kamerani QR kodga qarating", font=font_scan, fill="#1E293B", anchor="mm")
    draw.text((left_x + qr_box_w / 2, qr_top + int(840 * scale)), "To'g'ridan-to'g'ri sharh oynasi ochiladi", font=font_scan_ru, fill="#64748B", anchor="mm")
    
    # 5 stars mini under QR
    mini_star_y = qr_top + int(900 * scale)
    for i in range(5):
        cx = left_x + qr_box_w / 2 + (i - 2) * int(42 * scale)
        draw_star(draw, (cx, mini_star_y), int(16 * scale), fill="#F59E0B")
    draw.text((left_x + qr_box_w / 2, qr_top + int(940 * scale)), "5.0 ★★★★★", font=get_font(24 * scale, bold=True), fill="#D97706", anchor="mm")
    
    # Box 2: Yandex Maps
    draw.rounded_rectangle([right_x, qr_top, right_x + qr_box_w, qr_top + qr_box_h], radius=int(28 * scale), fill="#F8FAFC", outline="#FECACA", width=int(4 * scale))
    # Top badge pill
    pill_x2 = right_x + (qr_box_w - pill_w) // 2
    draw.rounded_rectangle([pill_x2, pill_y, pill_x2 + pill_w, pill_y + pill_h], radius=int(30 * scale), fill="#FEF2F2", outline="#F87171", width=int(2 * scale))
    draw.text((pill_x2 + pill_w / 2, pill_y + pill_h / 2), "YANDEX XARITALAR", font=font_pill, fill="#B91C1C", anchor="mm")
    
    draw.text((right_x + qr_box_w / 2, qr_top + int(150 * scale)), "Яндекс Карты", font=font_card_head, fill="#0F172A", anchor="mm")
    
    # Generate Yandex QR
    yandex_qr = generate_qr(YANDEX_REVIEW_URL, size=qr_size, badge_type="yandex")
    card.paste(yandex_qr, (right_x + (qr_box_w - qr_size) // 2, qr_top + int(210 * scale)), yandex_qr)
    
    draw.text((right_x + qr_box_w / 2, qr_top + int(790 * scale)), "📷 Kamerani QR kodga qarating", font=font_scan, fill="#1E293B", anchor="mm")
    draw.text((right_x + qr_box_w / 2, qr_top + int(840 * scale)), "Klinika sharhlari bo'limi ochiladi", font=font_scan_ru, fill="#64748B", anchor="mm")
    
    mini_star_y2 = qr_top + int(900 * scale)
    for i in range(5):
        cx = right_x + qr_box_w / 2 + (i - 2) * int(42 * scale)
        draw_star(draw, (cx, mini_star_y2), int(16 * scale), fill="#F59E0B")
    draw.text((right_x + qr_box_w / 2, qr_top + int(940 * scale)), "5.0 ★★★★★", font=get_font(24 * scale, bold=True), fill="#D97706", anchor="mm")
    
    # 4. Motivational Quote / Guarantee
    quote_y = int(1850 * scale)
    draw.rounded_rectangle([left_x, quote_y, right_x + qr_box_w, quote_y + int(170 * scale)], radius=int(20 * scale), fill="#F1F5F9")
    font_quote = get_font(34 * scale, bold=True)
    font_quote_sub = get_font(28 * scale, bold=False)
    draw.text((width / 2, quote_y + int(50 * scale)), "«Har bir bemorga individual yondashuv va tabassum go'zalligi»", font=font_quote, fill="#0F172A", anchor="mm")
    draw.text((width / 2, quote_y + int(115 * scale)), "Andijon shahrida zamonaviy implantologiya, ortopediya va estetik stomatologiya", font=font_quote_sub, fill="#475569", anchor="mm")
    
    # 5. Footer Details
    footer_top = int(2090 * scale)
    draw.rectangle([0, footer_top, width, height], fill="#0A192F")
    draw.rectangle([0, footer_top, width, footer_top + int(6 * scale)], fill="#38BDF8")
    
    font_f_head = get_font(38 * scale, bold=True)
    font_f_body = get_font(32 * scale, bold=False)
    font_f_small = get_font(28 * scale, bold=False)
    
    draw.text((width / 2, footer_top + int(70 * scale)), "MANZIL VA BOG'LANISH:", font=font_f_head, fill="#38BDF8", anchor="mm")
    draw.text((width / 2, footer_top + int(140 * scale)), "Andijon shahri, Prospekt, Navoiy shoh ko'chasi, 91-uy (SARIQ BOLA pizza yonida)", font=font_f_body, fill="#FFFFFF", anchor="mm")
    draw.text((width / 2, footer_top + int(210 * scale)), "Telefon: +998 97 676 01 01   |   Telegram: @dm_stomatology   |   Instagram: @dm.muxammadali", font=font_f_body, fill="#E2E8F0", anchor="mm")
    draw.text((width / 2, footer_top + int(290 * scale)), "Rasmiy veb-sayt: stomatolog-muhammadali.uz", font=font_f_small, fill="#94A3B8", anchor="mm")
    
    return card.convert("RGB")

def create_horizontal_card(width=2480, height=1748):
    """
    Creates a landscape table tent card (A5 landscape or desk stand).
    """
    card = Image.new("RGBA", (width, height), "#FFFFFF")
    draw = ImageDraw.Draw(card)
    scale = 1.0
    
    # Left 40% Navy branding sidebar
    side_w = 920
    draw.rectangle([0, 0, side_w, height], fill="#0A192F")
    draw.rectangle([side_w, 0, side_w + 10, height], fill="#38BDF8")
    
    # Sidebar Text
    draw.text((side_w / 2, 140), "DM STOMATOLOGIYA", font=get_font(44, bold=True), fill="#38BDF8", anchor="mm")
    draw.text((side_w / 2, 230), "Dr. MuhammadAli", font=get_font(60, bold=True), fill="#FFFFFF", anchor="mm")
    draw.text((side_w / 2, 305), "Davronov", font=get_font(60, bold=True), fill="#FFFFFF", anchor="mm")
    
    draw.text((side_w / 2, 400), "Yuz-jag' jarrohi", font=get_font(34, bold=False), fill="#E2E8F0", anchor="mm")
    draw.text((side_w / 2, 450), "Implantolog • Ortoped", font=get_font(34, bold=False), fill="#E2E8F0", anchor="mm")
    
    # Stars in sidebar
    for i in range(5):
        cx = side_w / 2 + (i - 2) * 55
        draw_star(draw, (cx, 550), 22, fill="#F59E0B")
    draw.text((side_w / 2, 610), "5.0 ★★★★★", font=get_font(30, bold=True), fill="#FBBF24", anchor="mm")
    
    # Middle banner in sidebar
    draw.rounded_rectangle([70, 700, side_w - 70, 1160], radius=24, fill="#1E293B", outline="#334155", width=2)
    draw.text((side_w / 2, 780), "FIKRINGIZ BIZ UCHUN", font=get_font(38, bold=True), fill="#FFFFFF", anchor="mm")
    draw.text((side_w / 2, 840), "JUDA MUHIM!", font=get_font(44, bold=True), fill="#38BDF8", anchor="mm")
    draw.text((side_w / 2, 930), "Davolanishdan mamnunmisiz?", font=get_font(30, bold=False), fill="#E2E8F0", anchor="mm")
    draw.text((side_w / 2, 980), "O'z samimiy bahongizni", font=get_font(30, bold=False), fill="#CBD5E1", anchor="mm")
    draw.text((side_w / 2, 1030), "xaritalarda qoldiring!", font=get_font(30, bold=False), fill="#CBD5E1", anchor="mm")
    draw.text((side_w / 2, 1100), "Оставьте ваш отзыв!", font=get_font(28, bold=False), fill="#94A3B8", anchor="mm")
    
    # Sidebar footer
    draw.text((side_w / 2, 1280), "MANZIL:", font=get_font(28, bold=True), fill="#38BDF8", anchor="mm")
    draw.text((side_w / 2, 1330), "Andijon sh., Prospekt, Navoiy sh., 91", font=get_font(28, bold=False), fill="#FFFFFF", anchor="mm")
    draw.text((side_w / 2, 1375), "(Sariq Bola pizza yonida)", font=get_font(24, bold=False), fill="#94A3B8", anchor="mm")
    draw.text((side_w / 2, 1460), "Tel: +998 97 676 01 01", font=get_font(32, bold=True), fill="#FFFFFF", anchor="mm")
    draw.text((side_w / 2, 1530), "stomatolog-muhammadali.uz", font=get_font(26, bold=False), fill="#38BDF8", anchor="mm")
    draw.text((side_w / 2, 1590), "Instagram: @dm.muxammadali", font=get_font(26, bold=False), fill="#CBD5E1", anchor="mm")
    
    # Right 60% Area: Dual QRs Side by Side
    right_start = side_w + 50
    content_w = width - right_start - 50
    
    draw.text((right_start + content_w / 2, 110), "BAHOLASH VA SHARH QOLDIRISH UCHUN SKAN QILING", font=get_font(44, bold=True), fill="#0F172A", anchor="mm")
    draw.text((right_start + content_w / 2, 180), "Istalgan xaritani tanlang va telefon kamerangizni QR kodga qarating", font=get_font(32, bold=False), fill="#64748B", anchor="mm")
    
    col_w = int((content_w - 60) / 2)
    col1_x = right_start + 10
    col2_x = col1_x + col_w + 40
    box_top = 260
    box_h = 1380
    
    # Google Box
    draw.rounded_rectangle([col1_x, box_top, col1_x + col_w, box_top + box_h], radius=24, fill="#F8FAFC", outline="#BFDBFE", width=3)
    pill_w = 400
    pill_h = 64
    draw.rounded_rectangle([col1_x + (col_w - pill_w) // 2, box_top + 40, col1_x + (col_w + pill_w) // 2, box_top + 40 + pill_h], radius=32, fill="#EFF6FF", outline="#60A5FA", width=2)
    draw.text((col1_x + col_w / 2, box_top + 40 + pill_h / 2), "GOOGLE MAPS", font=get_font(32, bold=True), fill="#1D4ED8", anchor="mm")
    draw.text((col1_x + col_w / 2, box_top + 170), "Google Xaritalar", font=get_font(46, bold=True), fill="#0F172A", anchor="mm")
    
    qr_sz = 520
    g_qr = generate_qr(GOOGLE_REVIEW_URL, size=qr_sz, badge_type="google")
    card.paste(g_qr, (col1_x + (col_w - qr_sz) // 2, box_top + 240), g_qr)
    
    draw.text((col1_x + col_w / 2, box_top + 840), "📷 Kamerangizni qarating", font=get_font(34, bold=True), fill="#1E293B", anchor="mm")
    draw.text((col1_x + col_w / 2, box_top + 900), "Google hisobingiz orqali", font=get_font(28, bold=False), fill="#64748B", anchor="mm")
    draw.text((col1_x + col_w / 2, box_top + 945), "5 yulduzli baho qoldiring", font=get_font(28, bold=False), fill="#64748B", anchor="mm")
    
    # 5 stars mini
    for i in range(5):
        cx = col1_x + col_w / 2 + (i - 2) * 44
        draw_star(draw, (cx, box_top + 1040), 18, fill="#F59E0B")
    draw.text((col1_x + col_w / 2, box_top + 1090), "A'lo darajada (5.0)", font=get_font(26, bold=True), fill="#D97706", anchor="mm")
    
    draw.rounded_rectangle([col1_x + 50, box_top + 1170, col1_x + col_w - 50, box_top + 1290], radius=16, fill="#EFF6FF")
    draw.text((col1_x + col_w / 2, box_top + 1230), "✓ To'g'ridan-to'g'ri sharh oynasi", font=get_font(26, bold=True), fill="#1D4ED8", anchor="mm")
    
    # Yandex Box
    draw.rounded_rectangle([col2_x, box_top, col2_x + col_w, box_top + box_h], radius=24, fill="#F8FAFC", outline="#FECACA", width=3)
    draw.rounded_rectangle([col2_x + (col_w - pill_w) // 2, box_top + 40, col2_x + (col_w + pill_w) // 2, box_top + 40 + pill_h], radius=32, fill="#FEF2F2", outline="#F87171", width=2)
    draw.text((col2_x + col_w / 2, box_top + 40 + pill_h / 2), "YANDEX XARITALAR", font=get_font(32, bold=True), fill="#B91C1C", anchor="mm")
    draw.text((col2_x + col_w / 2, box_top + 170), "Яндекс Карты", font=get_font(46, bold=True), fill="#0F172A", anchor="mm")
    
    y_qr = generate_qr(YANDEX_REVIEW_URL, size=qr_sz, badge_type="yandex")
    card.paste(y_qr, (col2_x + (col_w - qr_sz) // 2, box_top + 240), y_qr)
    
    draw.text((col2_x + col_w / 2, box_top + 840), "📷 Kamerangizni qarating", font=get_font(34, bold=True), fill="#1E293B", anchor="mm")
    draw.text((col2_x + col_w / 2, box_top + 900), "Yandex hisobingiz orqali", font=get_font(28, bold=False), fill="#64748B", anchor="mm")
    draw.text((col2_x + col_w / 2, box_top + 945), "5 yulduzli baho qoldiring", font=get_font(28, bold=False), fill="#64748B", anchor="mm")
    
    for i in range(5):
        cx = col2_x + col_w / 2 + (i - 2) * 44
        draw_star(draw, (cx, box_top + 1040), 18, fill="#F59E0B")
    draw.text((col2_x + col_w / 2, box_top + 1090), "A'lo darajada (5.0)", font=get_font(26, bold=True), fill="#D97706", anchor="mm")
    
    draw.rounded_rectangle([col2_x + 50, box_top + 1170, col2_x + col_w - 50, box_top + 1290], radius=16, fill="#FEF2F2")
    draw.text((col2_x + col_w / 2, box_top + 1230), "✓ Sharhlar bo'limiga o'tish", font=get_font(26, bold=True), fill="#B91C1C", anchor="mm")
    
    return card.convert("RGB")

print("Rendering high-res review cards...")

# 1. Generate Individual Standalone QR codes (High-res 1200x1200)
qr_g_standalone = generate_qr(GOOGLE_REVIEW_URL, size=1200, badge_type="google")
qr_g_standalone.save(os.path.join(PUBLIC_QR_DIR, "google_review_qr.png"))
qr_g_standalone.save(os.path.join(ARTIFACTS_DIR, "google_review_qr.png"))

qr_y_standalone = generate_qr(YANDEX_REVIEW_URL, size=1200, badge_type="yandex")
qr_y_standalone.save(os.path.join(PUBLIC_QR_DIR, "yandex_review_qr.png"))
qr_y_standalone.save(os.path.join(ARTIFACTS_DIR, "yandex_review_qr.png"))
print("[OK] Individual QR codes saved.")

# 2. Generate A5 Vertical Table Stand (1748 x 2480, 300 DPI)
card_a5 = create_vertical_card(width=1748, height=2480, scale=1.0)
card_a5.save(os.path.join(PUBLIC_QR_DIR, "review_stand_a5.png"), dpi=(300, 300))
card_a5.save(os.path.join(PUBLIC_QR_DIR, "review_stand_a5.pdf"), "PDF", resolution=300.0)
card_a5.save(os.path.join(ARTIFACTS_DIR, "review_stand_a5.png"), dpi=(300, 300))
card_a5.save(os.path.join(ARTIFACTS_DIR, "review_stand_a5.pdf"), "PDF", resolution=300.0)
print("[OK] A5 Vertical Table Stand PNG & PDF saved.")

# 3. Generate A4 Vertical Poster/Wall Stand (2480 x 3508, 300 DPI)
card_a4 = create_vertical_card(width=2480, height=3508, scale=1.418)
card_a4.save(os.path.join(PUBLIC_QR_DIR, "review_stand_a4.png"), dpi=(300, 300))
card_a4.save(os.path.join(PUBLIC_QR_DIR, "review_stand_a4.pdf"), "PDF", resolution=300.0)
card_a4.save(os.path.join(ARTIFACTS_DIR, "review_stand_a4.png"), dpi=(300, 300))
card_a4.save(os.path.join(ARTIFACTS_DIR, "review_stand_a4.pdf"), "PDF", resolution=300.0)
print("[OK] A4 Vertical Poster PNG & PDF saved.")

# 4. Generate Horizontal Desk Tent Card (2480 x 1748, 300 DPI)
card_h = create_horizontal_card(width=2480, height=1748)
card_h.save(os.path.join(PUBLIC_QR_DIR, "review_stand_horizontal.png"), dpi=(300, 300))
card_h.save(os.path.join(PUBLIC_QR_DIR, "review_stand_horizontal.pdf"), "PDF", resolution=300.0)
card_h.save(os.path.join(ARTIFACTS_DIR, "review_stand_horizontal.png"), dpi=(300, 300))
card_h.save(os.path.join(ARTIFACTS_DIR, "review_stand_horizontal.pdf"), "PDF", resolution=300.0)
print("[OK] Horizontal Table Tent PNG & PDF saved.")

print("\nALL REVIEW ASSETS GENERATED SUCCESSFULLY!")

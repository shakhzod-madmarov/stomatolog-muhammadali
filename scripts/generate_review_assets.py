import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Verified URLs
# 1. Google Official Review URL from user's verified Google Business Profile
GOOGLE_REVIEW_URL = "https://g.page/r/CbETKPLsTTxtEBM/review"

# 2. Yandex Doctor Personal Organization Review URL (ID: 73065652747)
# Separate dedicated practitioner listing for Dr. MuhammadAli Davronov (NOT the DM clinic building 214793392317)
YANDEX_DOCTOR_PERSONAL_URL = "https://yandex.uz/maps/org/73065652747/reviews/"

# Smart redirect on website domain that routes to the doctor's personal profile
YANDEX_SMART_REDIRECT_URL = "https://stomatolog-muhammadali.uz/yandex-review"

# Directories
PUBLIC_QR_DIR = os.path.abspath("frontend/public/qr")
ARTIFACTS_DIR = os.path.abspath(r"C:\Users\user\.gemini\antigravity\brain\7e11835c-1034-4486-a01c-138ea71d4f26")
os.makedirs(PUBLIC_QR_DIR, exist_ok=True)
os.makedirs(ARTIFACTS_DIR, exist_ok=True)

# Fonts - Clean Segoe UI / Arial
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
    """Draw a 5-pointed geometric golden star."""
    cx, cy = center
    points = []
    for i in range(10):
        angle = i * math.pi / 5 - math.pi / 2
        r = size if i % 2 == 0 else size * 0.44
        points.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(points, fill=fill)

def draw_camera_icon(draw, center, size, fill="#0F172A"):
    """Draw a clean vector camera icon (no missing emoji tofu glyphs!)."""
    cx, cy = center
    w = size
    h = int(size * 0.75)
    left = cx - w // 2
    top = cy - h // 2
    
    # Body
    draw.rounded_rectangle([left, top + int(h * 0.18), left + w, top + h], radius=int(size * 0.14), fill=fill)
    # Lens bump on top
    bump_w = int(w * 0.35)
    bump_h = int(h * 0.22)
    bump_left = cx - bump_w // 2
    draw.rounded_rectangle([bump_left, top, bump_left + bump_w, top + bump_h + 2], radius=int(size * 0.08), fill=fill)
    # Lens outer circle (white)
    lens_r = int(h * 0.28)
    draw.ellipse([cx - lens_r, cy + int(h * 0.1) - lens_r, cx + lens_r, cy + int(h * 0.1) + lens_r], fill="#FFFFFF")
    # Lens inner circle
    inner_r = int(lens_r * 0.6)
    draw.ellipse([cx - inner_r, cy + int(h * 0.1) - inner_r, cx + inner_r, cy + int(h * 0.1) + inner_r], fill=fill)

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

def create_vertical_card(width=1748, height=2480, scale=1.0, yandex_target_url=YANDEX_DOCTOR_PERSONAL_URL):
    """
    Creates a vertical table stand / tent card (A5: 1748x2480, A4: 2480x3508).
    Designed specifically for dental clinic reception and patient tables.
    """
    card = Image.new("RGBA", (width, height), "#FFFFFF")
    draw = ImageDraw.Draw(card)
    
    # 1. Subtle elegant top gradient header banner
    header_h = int(320 * scale)
    for y in range(header_h):
        r, g, b = int(10 + y * 0.02), int(25 + y * 0.05), int(47 + y * 0.08)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))
        
    # Accent cyan line under header
    accent_y = header_h
    draw.rectangle([0, accent_y, width, accent_y + int(8 * scale)], fill="#0284C7")
    
    # Header Branding Text
    font_brand = get_font(50 * scale, bold=True)
    font_doctor = get_font(72 * scale, bold=True)
    font_spec = get_font(34 * scale, bold=False)
    
    draw.text((width / 2, int(75 * scale)), "DM STOMATOLOGIYA", font=font_brand, fill="#38BDF8", anchor="mm")
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
    draw.text((width / 2, int(590 * scale)), "Fikringiz biz uchun muhim! 5 baho bering va samimiy sharh qoldiring", font=font_sub_uz, fill="#334155", anchor="mm")
    draw.text((width / 2, int(645 * scale)), "Оцените наш приём на 5 звёзд и оставьте ваш отзыв", font=font_sub_ru, fill="#64748B", anchor="mm")
    
    # 3. Two QR Cards (Google and Yandex)
    qr_box_w = int(720 * scale)
    qr_box_h = int(990 * scale)
    qr_top = int(730 * scale)
    
    box_gap = int(70 * scale)
    left_x = int((width - (qr_box_w * 2 + box_gap)) / 2)
    right_x = left_x + qr_box_w + box_gap
    
    # ==================== BOX 1: GOOGLE MAPS ====================
    draw.rounded_rectangle([left_x, qr_top, left_x + qr_box_w, qr_top + qr_box_h], radius=int(28 * scale), fill="#F8FAFC", outline="#BFDBFE", width=int(4 * scale))
    pill_w = int(400 * scale)
    pill_h = int(60 * scale)
    pill_x = left_x + (qr_box_w - pill_w) // 2
    pill_y = qr_top + int(40 * scale)
    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=int(30 * scale), fill="#EFF6FF", outline="#60A5FA", width=int(2 * scale))
    font_pill = get_font(30 * scale, bold=True)
    draw.text((pill_x + pill_w / 2, pill_y + pill_h / 2), "GOOGLE XARITALAR", font=font_pill, fill="#1D4ED8", anchor="mm")
    
    font_card_head = get_font(42 * scale, bold=True)
    draw.text((left_x + qr_box_w / 2, qr_top + int(150 * scale)), "Google Maps", font=font_card_head, fill="#0F172A", anchor="mm")
    
    # Generate Google QR with OFFICIAL SHORT LINK
    qr_size = int(520 * scale)
    google_qr = generate_qr(GOOGLE_REVIEW_URL, size=qr_size, badge_type="google")
    card.paste(google_qr, (left_x + (qr_box_w - qr_size) // 2, qr_top + int(210 * scale)), google_qr)
    
    # Vector Camera Icon + Scan Text (ZERO tofu boxes)
    cam_size = int(36 * scale)
    cam_x = left_x + int(120 * scale)
    cam_y = qr_top + int(800 * scale)
    draw_camera_icon(draw, (cam_x, cam_y), cam_size, fill="#1E293B")
    
    font_scan = get_font(32 * scale, bold=True)
    font_scan_ru = get_font(26 * scale, bold=False)
    draw.text((cam_x + int(28 * scale), cam_y), "Kamerani QR kodga qarating", font=font_scan, fill="#1E293B", anchor="lm")
    draw.text((left_x + qr_box_w / 2, qr_top + int(855 * scale)), "Google hisobingiz orqali baholang", font=font_scan_ru, fill="#64748B", anchor="mm")
    
    # 5 golden vector stars under QR
    mini_star_y = qr_top + int(915 * scale)
    for i in range(5):
        cx = left_x + qr_box_w / 2 + (i - 2) * int(44 * scale)
        draw_star(draw, (cx, mini_star_y), int(16 * scale), fill="#F59E0B")
    draw.text((left_x + qr_box_w / 2, qr_top + int(955 * scale)), "5.0 (A'lo darajada)", font=get_font(24 * scale, bold=True), fill="#D97706", anchor="mm")
    
    # ==================== BOX 2: YANDEX MAPS ====================
    draw.rounded_rectangle([right_x, qr_top, right_x + qr_box_w, qr_top + qr_box_h], radius=int(28 * scale), fill="#F8FAFC", outline="#FECACA", width=int(4 * scale))
    pill_x2 = right_x + (qr_box_w - pill_w) // 2
    draw.rounded_rectangle([pill_x2, pill_y, pill_x2 + pill_w, pill_y + pill_h], radius=int(30 * scale), fill="#FEF2F2", outline="#F87171", width=int(2 * scale))
    draw.text((pill_x2 + pill_w / 2, pill_y + pill_h / 2), "YANDEX XARITALAR", font=font_pill, fill="#B91C1C", anchor="mm")
    
    draw.text((right_x + qr_box_w / 2, qr_top + int(150 * scale)), "Яндекс Карты", font=font_card_head, fill="#0F172A", anchor="mm")
    
    # Generate Yandex QR with DOCTOR'S PERSONAL LISTING URL
    yandex_qr = generate_qr(yandex_target_url, size=qr_size, badge_type="yandex")
    card.paste(yandex_qr, (right_x + (qr_box_w - qr_size) // 2, qr_top + int(210 * scale)), yandex_qr)
    
    cam_x2 = right_x + int(120 * scale)
    draw_camera_icon(draw, (cam_x2, cam_y), cam_size, fill="#1E293B")
    draw.text((cam_x2 + int(28 * scale), cam_y), "Kamerani QR kodga qarating", font=font_scan, fill="#1E293B", anchor="lm")
    draw.text((right_x + qr_box_w / 2, qr_top + int(855 * scale)), "Dr. MuhammadAli profiliga o'tadi", font=font_scan_ru, fill="#64748B", anchor="mm")
    
    for i in range(5):
        cx = right_x + qr_box_w / 2 + (i - 2) * int(44 * scale)
        draw_star(draw, (cx, mini_star_y), int(16 * scale), fill="#F59E0B")
    draw.text((right_x + qr_box_w / 2, qr_top + int(955 * scale)), "5.0 (A'lo darajada)", font=get_font(24 * scale, bold=True), fill="#D97706", anchor="mm")
    
    # 4. Motivational Quote
    quote_y = int(1850 * scale)
    draw.rounded_rectangle([left_x, quote_y, right_x + qr_box_w, quote_y + int(170 * scale)], radius=int(20 * scale), fill="#F1F5F9")
    font_quote = get_font(34 * scale, bold=True)
    font_quote_sub = get_font(28 * scale, bold=False)
    draw.text((width / 2, quote_y + int(50 * scale)), "«Har bir bemorga individual yondashuv va tabassum go'zalligi»", font=font_quote, fill="#0F172A", anchor="mm")
    draw.text((width / 2, quote_y + int(115 * scale)), "Andijon shahrida zamonaviy dental implantologiya, ortopediya va terapiya", font=font_quote_sub, fill="#475569", anchor="mm")
    
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

def create_horizontal_card(width=2480, height=1748, yandex_target_url=YANDEX_DOCTOR_PERSONAL_URL):
    """
    Creates a landscape table tent card (A5 landscape or desk stand).
    """
    card = Image.new("RGBA", (width, height), "#FFFFFF")
    draw = ImageDraw.Draw(card)
    
    # Left 38% Navy branding sidebar
    side_w = 900
    draw.rectangle([0, 0, side_w, height], fill="#0A192F")
    draw.rectangle([side_w, 0, side_w + 10, height], fill="#38BDF8")
    
    draw.text((side_w / 2, 140), "DM STOMATOLOGIYA", font=get_font(44, bold=True), fill="#38BDF8", anchor="mm")
    draw.text((side_w / 2, 230), "Dr. MuhammadAli", font=get_font(60, bold=True), fill="#FFFFFF", anchor="mm")
    draw.text((side_w / 2, 305), "Davronov", font=get_font(60, bold=True), fill="#FFFFFF", anchor="mm")
    
    draw.text((side_w / 2, 400), "Yuz-jag' jarrohi", font=get_font(34, bold=False), fill="#E2E8F0", anchor="mm")
    draw.text((side_w / 2, 450), "Implantolog • Ortoped", font=get_font(34, bold=False), fill="#E2E8F0", anchor="mm")
    
    # Stars in sidebar
    for i in range(5):
        cx = side_w / 2 + (i - 2) * 55
        draw_star(draw, (cx, 550), 22, fill="#F59E0B")
    draw.text((side_w / 2, 610), "5.0 (A'lo darajada)", font=get_font(30, bold=True), fill="#FBBF24", anchor="mm")
    
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
    
    # Right 62% Area: Dual QRs Side by Side
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
    
    cam_size = 40
    cam_x = col1_x + 90
    cam_y = box_top + 840
    draw_camera_icon(draw, (cam_x, cam_y), cam_size, fill="#1E293B")
    draw.text((cam_x + 30, cam_y), "Kamerangizni qarating", font=get_font(36, bold=True), fill="#1E293B", anchor="lm")
    
    draw.text((col1_x + col_w / 2, box_top + 900), "Google hisobingiz orqali", font=get_font(28, bold=False), fill="#64748B", anchor="mm")
    draw.text((col1_x + col_w / 2, box_top + 945), "5 yulduzli baho qoldiring", font=get_font(28, bold=False), fill="#64748B", anchor="mm")
    
    # 5 stars mini
    for i in range(5):
        cx = col1_x + col_w / 2 + (i - 2) * 44
        draw_star(draw, (cx, box_top + 1040), 18, fill="#F59E0B")
    draw.text((col1_x + col_w / 2, box_top + 1090), "A'lo darajada (5.0)", font=get_font(26, bold=True), fill="#D97706", anchor="mm")
    
    draw.rounded_rectangle([col1_x + 50, box_top + 1170, col1_x + col_w - 50, box_top + 1290], radius=16, fill="#EFF6FF")
    draw.text((col1_x + col_w / 2, box_top + 1230), "Dr. MuhammadAli Davronov", font=get_font(26, bold=True), fill="#1D4ED8", anchor="mm")
    
    # Yandex Box
    draw.rounded_rectangle([col2_x, box_top, col2_x + col_w, box_top + box_h], radius=24, fill="#F8FAFC", outline="#FECACA", width=3)
    draw.rounded_rectangle([col2_x + (col_w - pill_w) // 2, box_top + 40, col2_x + (col_w + pill_w) // 2, box_top + 40 + pill_h], radius=32, fill="#FEF2F2", outline="#F87171", width=2)
    draw.text((col2_x + col_w / 2, box_top + 40 + pill_h / 2), "YANDEX XARITALAR", font=get_font(32, bold=True), fill="#B91C1C", anchor="mm")
    draw.text((col2_x + col_w / 2, box_top + 170), "Яндекс Карты", font=get_font(46, bold=True), fill="#0F172A", anchor="mm")
    
    y_qr = generate_qr(yandex_target_url, size=qr_sz, badge_type="yandex")
    card.paste(y_qr, (col2_x + (col_w - qr_sz) // 2, box_top + 240), y_qr)
    
    cam_x2 = col2_x + 90
    draw_camera_icon(draw, (cam_x2, cam_y), cam_size, fill="#1E293B")
    draw.text((cam_x2 + 30, cam_y), "Kamerangizni qarating", font=get_font(36, bold=True), fill="#1E293B", anchor="lm")
    
    draw.text((col2_x + col_w / 2, box_top + 900), "Yandex hisobingiz orqali", font=get_font(28, bold=False), fill="#64748B", anchor="mm")
    draw.text((col2_x + col_w / 2, box_top + 945), "5 yulduzli baho qoldiring", font=get_font(28, bold=False), fill="#64748B", anchor="mm")
    
    for i in range(5):
        cx = col2_x + col_w / 2 + (i - 2) * 44
        draw_star(draw, (cx, box_top + 1040), 18, fill="#F59E0B")
    draw.text((col2_x + col_w / 2, box_top + 1090), "A'lo darajada (5.0)", font=get_font(26, bold=True), fill="#D97706", anchor="mm")
    
    draw.rounded_rectangle([col2_x + 50, box_top + 1170, col2_x + col_w - 50, box_top + 1290], radius=16, fill="#FEF2F2")
    draw.text((col2_x + col_w / 2, box_top + 1230), "Dr. MuhammadAli Davronov", font=get_font(26, bold=True), fill="#B91C1C", anchor="mm")
    
    return card.convert("RGB")

print("Rendering high-res review cards with verified URLs...")

# 1. Standalone Google Review QR (with verified short link)
qr_g = generate_qr(GOOGLE_REVIEW_URL, size=1200, badge_type="google")
qr_g.save(os.path.join(PUBLIC_QR_DIR, "google_review_qr.png"))
qr_g.save(os.path.join(ARTIFACTS_DIR, "google_review_qr.png"))

# 2. Standalone Yandex Doctor Personal Review QR (ID: 73065652747)
qr_y = generate_qr(YANDEX_DOCTOR_PERSONAL_URL, size=1200, badge_type="yandex")
qr_y.save(os.path.join(PUBLIC_QR_DIR, "yandex_review_qr.png"))
qr_y.save(os.path.join(ARTIFACTS_DIR, "yandex_review_qr.png"))

# 2b. Standalone Yandex Smart Redirect QR (stomatolog-muhammadali.uz/yandex-review)
qr_y_smart = generate_qr(YANDEX_SMART_REDIRECT_URL, size=1200, badge_type="yandex")
qr_y_smart.save(os.path.join(PUBLIC_QR_DIR, "yandex_review_smart_qr.png"))
qr_y_smart.save(os.path.join(ARTIFACTS_DIR, "yandex_review_smart_qr.png"))
print("[OK] Individual QR codes generated.")

# 3. A5 Vertical Table Stand
card_a5 = create_vertical_card(width=1748, height=2480, scale=1.0, yandex_target_url=YANDEX_DOCTOR_PERSONAL_URL)
card_a5.save(os.path.join(PUBLIC_QR_DIR, "review_stand_a5.png"), dpi=(300, 300))
card_a5.save(os.path.join(PUBLIC_QR_DIR, "review_stand_a5.pdf"), "PDF", resolution=300.0)
card_a5.save(os.path.join(ARTIFACTS_DIR, "review_stand_a5.png"), dpi=(300, 300))
card_a5.save(os.path.join(ARTIFACTS_DIR, "review_stand_a5.pdf"), "PDF", resolution=300.0)
print("[OK] A5 Vertical Stand updated.")

# 4. A4 Vertical Poster
card_a4 = create_vertical_card(width=2480, height=3508, scale=1.418, yandex_target_url=YANDEX_DOCTOR_PERSONAL_URL)
card_a4.save(os.path.join(PUBLIC_QR_DIR, "review_stand_a4.png"), dpi=(300, 300))
card_a4.save(os.path.join(PUBLIC_QR_DIR, "review_stand_a4.pdf"), "PDF", resolution=300.0)
card_a4.save(os.path.join(ARTIFACTS_DIR, "review_stand_a4.png"), dpi=(300, 300))
card_a4.save(os.path.join(ARTIFACTS_DIR, "review_stand_a4.pdf"), "PDF", resolution=300.0)
print("[OK] A4 Vertical Poster updated.")

# 5. Horizontal Landscape Stand
card_h = create_horizontal_card(width=2480, height=1748, yandex_target_url=YANDEX_DOCTOR_PERSONAL_URL)
card_h.save(os.path.join(PUBLIC_QR_DIR, "review_stand_horizontal.png"), dpi=(300, 300))
card_h.save(os.path.join(PUBLIC_QR_DIR, "review_stand_horizontal.pdf"), "PDF", resolution=300.0)
card_h.save(os.path.join(ARTIFACTS_DIR, "review_stand_horizontal.png"), dpi=(300, 300))
card_h.save(os.path.join(ARTIFACTS_DIR, "review_stand_horizontal.pdf"), "PDF", resolution=300.0)
print("[OK] Horizontal Landscape Stand updated.")

print("\nALL VERIFIED REVIEW ASSETS READY!")

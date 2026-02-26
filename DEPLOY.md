# 🚀 HƯỚNG DẪN DEPLOY LÊN VERCEL

## Bước 1: Push Code lên GitHub

```bash
# 1. Di chuyển vào thư mục project
cd /home/node/.openclaw/workspace/learn-aiclick-vn

# 2. Khởi tạo git (nếu chưa có)
git init
git add .
git commit -m "Initial commit - Space Academy MVP"

# 3. Tạo repository trên GitHub và push
# Hoặc dùng GitHub CLI:
gh repo create learn-aiclick-vn --public --source=. --description "Học Viện Vũ Trụ - EdTech Gamification"
gh repo set-default
git push -u origin main
```

## Bước 2: Deploy lên Vercel

### Cách 1: Qua Vercel Dashboard (Dễ nhất)

1. Truy cập https://vercel.com
2. Đăng nhập (GitHub)
3. Click "Add New..." → Project
4. Chọn repository "learn-aiclick-vn"
5. Configure:
   - Framework Preset: `Next.js`
   - Build Command: `next build` (mặc định)
   - Output Directory: `.next` (mặc định)
6. Click "Deploy"

### Cách 2: Qua Vercel CLI

```bash
# Cài Vercel CLI
npm install -g vercel

# Deploy
vercel

# Làm theo hướng dẫn:
# - Set up and deploy? Yes
# - Which scope? [Your Vercel account]
# - Link to existing project? No
# - Project Name: learn-aiclick-vn
# - Directory? ./
# - Want to modify settings? No
```

## Bước 3: Cấu hình Custom Domain

Sau khi deploy thành công:

1. Vào Project Settings → Domains
2. Thêm domain: `learn.aiclick.vn`
3. Vercel sẽ hiển thị DNS records:

```
Type: CNAME
Name: learn
Value: cname.vercel-dns.com
```

4. **Cập nhật DNS tại domain provider (aiclick.vn):**

   Đăng nhập vào panel quản lý domain (nơi mua domain aiclick.vn)
   
   Thêm record:
   ```
   Type: CNAME
   Host/Name: learn
   Points to: cname.vercel-dns.com
   TTL: 3600 (or auto)
   ```

5. Đợi 1-24 giờ để DNS propagate

## Bước 4: Xác nhận

- Sau khi DNS update, truy cập: https://learn.aiclick.vn
- Nếu thấy trang "Học Viện Vũ Trụ" → Thành công! 🎉

---

## 📝 NOTE: Cần cập nhật code trước khi deploy

Code hiện tại là **MVP landing page** để demo. 

Để có đầy đủ chức năng (auth, quiz, game), cần:
1. Setup Supabase (database + auth)
2. Cập nhận env variables
3. Thêm các trang: /login, /dashboard, /missions, etc.

**File code đã có tại:**
`/home/node/.openclaw/workspace/learn-aiclick-vn/`

---

*Created: 2026-02-26*

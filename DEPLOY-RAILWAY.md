# Deploy Quyền Locket riêng trên Railway

Repo triển khai: `https://github.com/maihongquyen/locket-dio`

Hai domain Railway cũ trong lịch sử project đã bị xóa. Deployment mới phải tạo
hai service riêng trong cùng một Railway project: API trước, Web sau.

## 1. Service API

- Source: repo trên, branch `main`.
- Root Directory: `api`.
- Builder: Dockerfile (`api/Dockerfile`).
- Health check: `/health`.

Biến bắt buộc:

```env
NODE_ENV=production
FIREBASE_API_KEY=<khóa Firebase hợp lệ>
COOKIE_SECRET=<giữ cố định>
LOCKETDIO_JWT_SECRET=<giữ cố định>
LOCKETDIO_SIGNATURE_SECRET=<giữ cố định>
JWT_SECRET=<tối thiểu 32 ký tự, giữ cố định>
VAPID_PUBLIC_KEY=<khớp VITE_VAPID_PUBLIC_KEY>
VAPID_PRIVATE_KEY=<giữ kín>
VAPID_SUBJECT=https://github.com/maihongquyen
LOCKET_APP_CHECK_DEVICE_ID=1:641029076083:ios:cc8eb46290d69b234fa606
LOCKET_APP_CHECK_DEVICE_TOKEN=
```

Sau khi deploy, tạo public domain và kiểm tra:

```text
https://<api-domain>.up.railway.app/health
```

Các biến tùy chọn:

- `DATABASE_URL`: bật dữ liệu bền cho Admin, Drive, Draft và Canh Slot 24/7.
- `REDIS_URL`: cần khi chạy nhiều instance Socket.IO/AppCheck.
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`: metadata nhạc chính thức.
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`: membership/draft Supabase.
- Telegram, Gmail, Zalo, R2: chỉ cần khi bật đúng tích hợp tương ứng.

## 2. Service Web

- Source: cùng repo và branch `main`.
- Root Directory: để trống.
- Builder: Dockerfile (`Dockerfile` ở root).
- Health check: `/`.

Biến bắt buộc:

```env
NODE_ENV=production
LOCKET_API_UPSTREAM=https://<api-domain>.up.railway.app
```

Sau khi deploy, tạo public domain rồi cập nhật service API:

```env
CORS_ORIGINS=https://<web-domain>.up.railway.app
PUBLIC_WEB_URL=https://<web-domain>.up.railway.app
```

Redeploy API sau khi đổi hai biến này.

## 3. Kiểm tra production

Ba URL sau phải thành công:

```text
https://<web-domain>.up.railway.app/login
https://<web-domain>.up.railway.app/dio-api/health
https://<api-domain>.up.railway.app/health
```

Sau đó kiểm tra đăng nhập bằng một tài khoản Locket hợp lệ, tải một ảnh thử và
xác nhận realtime Socket.IO không báo lỗi kết nối.

## 4. Domain riêng

Khi đã có domain, gắn domain vào service Web rồi thêm domain đó vào
`CORS_ORIGINS` và `PUBLIC_WEB_URL` của API. Không đặt secret trong biến `VITE_*`
vì mọi biến `VITE_*` đều được đóng gói công khai vào JavaScript frontend.

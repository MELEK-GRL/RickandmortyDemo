# Rick and Morty Demo

Bu proje, Rick and Morty API kullanılarak hazırlanmış bir frontend task çalışmasıdır.  
URL üzerinden filtre yönetimi ve ölçeklenebilir bir frontend mimarisi kurabildiğimi göstermekti.

## Canlı Demo
https://rickandmorty-demo.vercel.app

## Projede Yapılanlar
- Rick and Morty API üzerinden karakter listesi çekildi
- Karakterler status ve gender alanlarına göre filtrelenebiliyor
- Seçilen filtreler URL query parametrelerine yazılıyor
  - Örnek: ?status=alive&gender=male
- Birden fazla filtre birlikte çalışıyor
- Sayfa yenilendiğinde filtreler URL üzerinden korunuyor
- Filtre değiştiğinde shallow false olacak şekilde sayfa yeniden SSR ediliyor
- UI tarafında sade ve modern bir arayüz oluşturuldu (shadcn/ui)

## Kullanılan Teknolojiler
- Next.js 15 (App Router)
- TypeScript (any kullanılmadan)
- Tailwind CSS
- shadcn/ui
- React Query (TanStack Query)
- Zustand
- nuqs
- ESLint ve Prettier

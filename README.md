---หากยังไม่มี NodeJS ให้ติดตั้งก่อน---
สามารถ clone repo หรือ dowload code จาก src ได้เลย
---หาก download มาแค่ code จาก src---
จะต้อง npm init -y,
npm install typescript --save-dev,
สร้าง tsconfig.json โดยมี code ตาม tsconfig.json ใน repo,
สร้าง folder เก็บ src ==> mkdir src,
npm install jest ts-jest @types/jest --save-dev,
สร้าง jest.config.js โดยมี code ตาม jest.config.js ใน repo,
ในส่วนของ package.json ให้เปลี่ยนดั้ง part นี้,

"scripts": {
  "test": "jest"
},

ใช้ npx tsc เพื่อรัน code,
ใช้ npm test ที่เราตั้งไว้เพื่อรัน test case,

**มีการใช้ if-else จำนวนมากเพื่อลดจำนวนการ loop เพื่อ performance ที่ดีขึ้นและมีการกำหนดตัวแปรเพิ่มเพื่อช่วยลดปัญหาการเช็คค่าที่หมดไปแล้วใหม่ 
(อีกวิธีคือการ loop หาก list ใดหมดให้ loop check ที่เหลือแล้วเพิ่มเข้าอีกจนครบ)
,มีการใช้ math.min เพื่อความสะดวกในการหาค่าที่น้อยที่สุด

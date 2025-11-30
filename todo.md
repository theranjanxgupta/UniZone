# UniZone Premium Redesign - Development Plan

## Core Requirements
1. **Typography System**: Implement Inter/SF Pro/Poppins fonts with proper weights
2. **Billion-Dollar UI**: Glassmorphism, 3D shadows, gradients, Framer Motion animations
3. **Page Restructure**: Move "Everything You Need" section to Page 2 (after hero)
4. **Learn More Modal**: Glassmorphic overlay with premium animations
5. **3D Flip Team Cards**: Click-to-flip cards with complete contact details

## Files to Create/Modify

### 1. index.css - Enhanced typography and premium styles
- Import Inter/Poppins fonts
- Add glassmorphism utilities
- Enhanced 3D effects and animations
- Premium gradient definitions

### 2. src/pages/Index.tsx - Main page redesign
- Restructure page order (Hero → Everything You Need → About → Team)
- Implement glassmorphic Learn More modal with Framer Motion
- Add 3D flip team cards with click interaction
- Premium animations throughout
- Update team member data with exact contact details

### 3. src/components/TeamCard.tsx - New 3D flip card component
- Click-based flip interaction
- Front: Initials + Name + Role
- Back: Description + Contact Details (Phone, Email, WhatsApp, Instagram, LinkedIn)
- Smooth 3D rotation with depth
- Premium styling

### 4. tailwind.config.ts - Extended configuration
- Custom glassmorphism utilities
- Premium gradient colors
- Extended shadows and blur effects

## Team Member Data (Exact Format for Back Side)

**Ranjan Sah - Founder & CEO**
Description: Vision-driven leader focused on building an innovative, student-centric ecosystem.
Phone: 7061526593
Email: theranjanxgupta@icloud.com
Instagram: https://www.instagram.com/theranjangupta03?igsh=dXEzYjg3aXZpYXEz&utm_source=qr

**Abhibhay Thakur - Co-Founder**
Description: Strategic thinker dedicated to simplifying campus experiences through modern digital solutions.
Phone: +91 97984 99441
WhatsApp: +91 97984 99441

**Hrishi Vishwakarma - Team Member**
Description: Contributes to UI/UX and product enhancement with creative ideas and technical execution.
Phone: +91 7856-000966

**Ankit Kumar - Team Member**
Description: Works on development, optimization and improving user interactions across the platform.
Phone: +91 7481-988334

**Suraj Kumar - Team Member**
Description: Assists with backend logic, configuration and smooth functioning of core features.
Phone: 74887 53145

## Design Principles
- Apple-Stripe-Notion inspired hierarchy
- Smooth transitions and micro-interactions
- Premium spacing and padding
- Magnetic hover effects
- Parallax scroll effects
- High-end glassmorphism throughout
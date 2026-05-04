# Component API Documentation

## Topbar Component

```jsx
<Topbar />
```

Displays contact information (email and phone) at the top of the page.

**Props:** None  
**Styling:** `Topbar.module.css`

---

## Navbar Component

```jsx
<Navbar />
```

Navigation bar with logo, menu links, and dropdown. Includes sticky effect on scroll.

**Props:** None  
**Uses Hook:** `useStickyNav()`  
**Styling:** `Navbar.module.css`

**Features:**
- Sticky positioning on scroll (> 40px)
- Mobile-responsive hamburger menu
- Dropdown menu for "Pages" section
- Active link styling

---

## Hero Component

```jsx
<Hero />
```

Large hero section with background image, main headline, and video play button.

**Props:** None  
**Uses Component:** `VideoModal`  
**Styling:** `Hero.module.css`

**Features:**
- Eye-catching headline
- Video modal trigger
- Responsive button layout
- Pulsing play button animation

---

## VideoModal Component

```jsx
<VideoModal 
  show={boolean}
  onClose={function}
  videoUrl={string}
/>
```

Bootstrap-style modal for displaying YouTube videos.

**Props:**
- `show` (boolean) - Control modal visibility
- `onClose` (function) - Callback when closing
- `videoUrl` (string) - YouTube embed URL

**Example:**
```jsx
const [showModal, setShowModal] = useState(false);

<VideoModal
  show={showModal}
  onClose={() => setShowModal(false)}
  videoUrl="https://www.youtube.com/embed/VIDEO_ID"
/>
```

---

## About Component

```jsx
<About />
```

About section with image, description, and feature cards.

**Props:** None  
**Styling:** `About.module.css`

**Features:**
- Section title with underline decoration
- Side-by-side image and text layout
- Feature cards with icons
- Responsive grid layout

---

## Facts Component

```jsx
<Facts />
```

Statistics counter section with animated number counting.

**Props:** None  
**Uses Hook:** `useCountUp(target, duration)`  
**Styling:** `Facts.module.css`

**Features:**
- Intersection Observer triggers counting
- Customizable counter animations
- Background image overlay
- Responsive grid

**Counters:**
- Our Experience
- Cake Specialist
- Complete Project
- Happy Clients

---

## Menu Component

```jsx
<Menu />
```

Tabbed menu system showing cakes by category (Birthday, Wedding, Custom).

**Props:** None  
**State:** `activeTab` (string)  
**Styling:** `Menu.module.css`

**Features:**
- Tab-based filtering
- Menu item cards with images and prices
- Smooth tab transitions
- Responsive layout

**Data Structure:**
```javascript
{
  birthday: [{ name, price, description, image }],
  wedding: [{ name, price, description, image }],
  custom: [{ name, price, description, image }]
}
```

---

## Services Component

```jsx
<Services />
```

Service cards and special offer section.

**Props:** None  
**Styling:** `Services.module.css`

**Features:**
- Service cards with descriptions
- Special offer banner
- Call-to-action buttons
- Background image overlay

---

## Team Component

```jsx
<Team />
```

Team member cards with hover overlay showing social links.

**Props:** None  
**Styling:** `Team.module.css`

**Features:**
- Team member photos
- Hover overlay with scale and blur effect
- Social media links (Twitter, Facebook, LinkedIn)
- Responsive grid layout

---

## Testimonials Component

```jsx
<Testimonials />
```

Client testimonial cards in a grid layout.

**Props:** None  
**Styling:** `Testimonials.module.css`

**Features:**
- Client photo, name, and role
- Testimonial text
- Responsive grid (1-4 columns)
- Styled cards with border

**Data Structure:**
```javascript
{
  name: string,
  role: string,
  image: string,
  text: string
}
```

---

## Footer Component

```jsx
<Footer />
```

Footer with brand info, contact details, quick links, and newsletter signup.

**Props:** None  
**Styling:** `Footer.module.css`

**Features:**
- Brand section with description
- Get In Touch with contact info and social links
- Quick Links navigation
- Newsletter signup form
- Footer bottom copyright

---

## Custom Hooks

### useStickyNav()

```jsx
const isSticky = useStickyNav();
```

Tracks scroll position and returns true when scroll > 40px.

**Returns:** `boolean` - True if sticky, false otherwise

**Usage:**
```jsx
const isSticky = useStickyNav();
return <nav className={isSticky ? styles.sticky : ''}></nav>;
```

---

### useCountUp(target, duration)

```jsx
const { count, ref } = useCountUp(12345, 2000);
```

Animates counting from 0 to target number using Intersection Observer.

**Parameters:**
- `target` (number) - Target count value (default: 0)
- `duration` (number) - Animation duration in ms (default: 2000)

**Returns:** 
```javascript
{
  count: number,        // Current count value
  ref: function         // Ref setter for intersection observer
}
```

**Usage:**
```jsx
const { count, ref } = useCountUp(12345);
return (
  <div ref={ref}>
    <h1>{count.toLocaleString()}</h1>
  </div>
);
```

---

### useBackToTop()

```jsx
const { isVisible, scrollToTop } = useBackToTop();
```

Tracks scroll position and provides scroll-to-top functionality.

**Returns:**
```javascript
{
  isVisible: boolean,     // Show button when scroll > 100px
  scrollToTop: function   // Smooth scroll to top
}
```

**Usage:**
```jsx
const { isVisible, scrollToTop } = useBackToTop();
return isVisible && (
  <button onClick={scrollToTop}>↑ Back to Top</button>
);
```

---

## Styling Patterns

### Using CSS Modules

```jsx
import styles from '../styles/ComponentName.module.css';

export default function Component() {
  return <div className={styles.containerClass}></div>;
}
```

### Combining Bootstrap & CSS Modules

```jsx
<div className={`${styles.customClass} container-fluid py-5`}>
  {/* Bootstrap classes + custom CSS Module classes */}
</div>
```

### Conditional Styling

```jsx
<button className={`${styles.btn} ${isActive ? styles.active : ''}`}>
  Click me
</button>
```

---

## Performance Tips

✅ **Memoization:** Use `React.memo()` for heavy components
✅ **Code Splitting:** Use `React.lazy()` for route-based splitting
✅ **Image Optimization:** Use WebP format with fallbacks
✅ **Intersection Observer:** Lazy load images and animations
✅ **CSS Modules:** Reduce CSS bundle size with scoping

---

## Testing Components

Components are designed to be easily testable with React Testing Library:

```javascript
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders hero component', () => {
  render(<Hero />);
  expect(screen.getByText(/CakeZone/i)).toBeInTheDocument();
});
```

---

## Accessibility Features

✅ **ARIA Labels** - Screen reader support
✅ **Semantic HTML** - Proper heading hierarchy
✅ **Alt Text** - Image descriptions
✅ **Keyboard Navigation** - Full keyboard support
✅ **Focus Indicators** - Clear focus states

---

## Browser Support

All components work in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Contributing

When adding new components:

1. Create component in `src/components/`
2. Create CSS Module in `src/styles/`
3. Export from component file
4. Import and use in `App.jsx`
5. Update this documentation
6. Add JSDoc comments to code

---

For more details, see individual component files.

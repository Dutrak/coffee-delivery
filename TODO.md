# TODO for Coffe Delivery Project

## Application Config ✓
- [x] Add Tailwind configs
- [ ] Configure ESLint
- [x] Install Phosphor React for icons
- [x] Define the pages
- [x] Install and config React Router DOM

## Home Page ✓
- [x] Separate the page into components
  - [x] Header Component
  - [x] Hero Component
  - [x] ProductList Component
    - [x] Products Component
- [x] Create Product fake dataabase (for dev purposes)
- [x] Create cart context
- [x] Create cart reducer
  - [x] Add to cart Action
  - [x] Remove from cart Action
  - [x] Add reducer to the context
- [x] Update components to use the cart context
- [x] Save cart on local storage

## Checkout Page
- [ ] Separate the page into components
  - [x] Header Component
  - [ ] Form Component
  - [ ] ProductCheckout Component
      - [ ] Use cart context for updating values
- [ ] Create order form
- [ ] Get cart items
- [ ] Get total value from cart + delivery shipping
- [ ] Send form (save on local storage?)
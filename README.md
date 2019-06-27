>Think of it this way: There are two kinds of failure. The first comes from never trying out your ideas because you are afraid, or because you are waiting for the perfect time. This kind of failure you can never learn from, and such timidity will destroy you. The second kind comes from a bold and venturesome spirit. If you fail in this way, the hit that you take to your reputation is greatly outweighed by what you learn. Repeated failure will toughen your spirit and show you with absolute clarity how things must be done. In fact, it is a curse to have everything go right on your first attempt. You will fail to question the element of luck, making you think that you have the golden touch. When you do inevitably fail, it will confuse and demoralize you past the point of learning. In any case, to apprentice as an entrepreneur you must act on your ideas as early as possible, exposing them to the public, a part of you even hoping that you’ll fail. You have everything to gain. - Robert Greene

>It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat. - Theodore Roosevelt

---
# Data creation Flow

1. Create a User
2. Create a Restaurant
3. Create Locations for a Restaurant
4. Create a Menu for a Restaurant
5. Create Dishs for a Restaurant

- Associate Dishs to a Menu
- Associate Menus to a Location

# Access Control Rules

Types of methods: get, create update, remove, list

Types of users: [Superuser, Admin, Customer]

- Superuser
  - Companies
    - [ALL]

- Admin 
  - Companies
    - [get, create, update, remove]
  - Locations
    - [ALL]
  - Dishs
    - [ALL]
  - Menus
    - [ALL]
  - Reservations
    - [list]
  - Users
    - [none]

### Well known JWKs
https://cognito-idp.{region}.amazonaws.com/{userPoolId}/.well-known/jwks.json

### Server
ec2-3-13-21-123.us-east-2.compute.amazonaws.com
3.13.21.123
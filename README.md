# Booking Hotel
Main feature of this project is can find hotel around the world and can reservation.



## Detail
- Total time taken: ~40
- Start date: 12/12
- Members: Nguyễn Hoàng Khoa - UIT (20521471)
- Framework: React , Express
- Libs: Axios
- Database: MongoDB
- I'm use Insomnia to make API request
-JWT,MUI,Cloudinary

## Feature
![img.png](assets/git/images/homepage.png)
- Find hotel to reservation: You can search for hotels by the name of the country, select the check-in and check-out dates and the number of guests and rooms booked
  ![img.png](assets/git/images/searchHotel1.png)
  ![img.png](assets/git/images/searchHotel2.png)
- Browse by property type
- ![img.png](assets/git/images/browse.png)
- Login to reservation room
- ![img.png](assets/git/images/loginpage.png)
- ![img.png](assets/git/images/selectRoom.png)
- See detail of hotel 
- ![img.png](assets/git/images/detaihotel1.png)
- ![img.png](assets/git/images/detailhotel2.png)
- If someone has already booked a room, the room will no longer be available for booking
- ![img.png](assets/git/images/roomsoldout.png)
- Admin page : can add hotel , add user, add room in hotel 
- ![img.png](assets/git/images/manageHotel.png)
- ![img.png](assets/git/images/manageRoom.png)



## Build Notes
```
# Clone project 
git clone https://github.com/khoanguyen23/Booking-Hotel.git
# Install dependencies
cd api
yarn
cd clien
yarn
cd admin
yarn
# Run
yarn start

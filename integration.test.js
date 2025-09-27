const axios = require('axios');

test("POST verrify login with valid credentials", async () => {
    const response=  await axios.post('https://restful-booker.herokuapp.com/auth', {
        "username": "admin",
        "password": "password123"
    })
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("token");
    expect(typeof response.data.token).toBe("string");
});

test("GET all booking ids should return array of ids", async () => {
    const response=  await axios.get('https://restful-booker.herokuapp.com/booking')
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    if (response.data.length > 0) {
        expect(response.data[0]).toHaveProperty("bookingid");
        expect(typeof response.data[0].bookingid).toBe("number");
    }
});

test("PUT update booking successfully", async () => {
    // call auth request to get token
    const authResponse=  await axios.post('https://restful-booker.herokuapp.com/auth', {
        "username": "admin",
        "password": "password123"
    })
    const token = authResponse.data.token;
    // call put request to update booking
    const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        }
    const payload = {
        "firstname": "James",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2025-10-01",
            "checkout": "2019-10-03"
        },
        "additionalneeds": "Breakfast"
    }    


    const updateResponse = await axios.put('https://restful-booker.herokuapp.com/booking/1',payload, { headers: headers });
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.data).toHaveProperty("firstname", "James");
    expect(updateResponse.data).toHave

});


test("DELETE booking successfully", async () => {
    // call auth request to get token
    const authResponse=  await axios.post('https://restful-booker.herokuapp.com/auth', {
        "username": "admin",
        "password": "password123"
    })
    const token = authResponse.data.token;
    // call delete request to delete booking
    const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        }
    const deleteResponse = await axios.delete('https://restful-booker.herokuapp.com/booking/1', { headers: headers });
    expect(deleteResponse.status).toBe(201);
}); 

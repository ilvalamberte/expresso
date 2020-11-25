const router = require('express').Router();
let User = require('../models/user.model');
const nodemailer = require("nodemailer");




router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findUser(email, password);
    if (user) {
        req.session.user = user._id;
        res.json({
            message: "you are logged in",
            auth: true
        });
    } else {
        res.json({
            message: "Some error, you are not logged in",
            auth: false
        })
    }
    console.log(user._id)
});

router.post('/signup', async (req, res) => {

    const user = new User(req.body);
    req.session.user = user._id;

    let transporter = nodemailer.createTransport({

        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "ayla55@ethereal.email",
            pass: "tqnTXGTy1RF8s2fYm8",
        },
    });

    const msg = {
        from: '"Magdalena" <test@example.com>',
        to: `${req.body.email}`,
        subject: `Hello ${req.body.username}`,
        text: `Congratulations ${req.body.username}! You are a new user!`,
    }
    const info = await transporter.sendMail(msg)

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    // res.send('email sent!');

    user.save()
        .then((result) => {
            res.json({
                message: "successfully created",
                auth: true,
                link: nodemailer.getTestMessageUrl(info)
            });
        })
        .catch((err) => {
            res.json({
                message: 'unable to create account',
                auth: false,
            });
        });
});


router.get("/hassignned", (req, res) => {
    console.log(req.session.user)
    const user = req.session.user;
    if (req.session.user) {
        return res.json({
            auth: true,
            message: "you are logged in",
        })
    }
    return res.json({
        auth: false,
        message: "you are logged out",
    })
})

router.get("/logout", (req, res) => {

    req.session.destroy();
    return res.json({
        auth: false,
        message: "you are logged out",
    })

})

module.exports = router;






// router.route('/').get((req, res) => {
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     const newUser = new User({ username, email, password });

//     newUser.save()
//         .then(() => res.json('User added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });


// router.route('/:id').get((req, res) => {
//     User.findById(req.params.id)
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//     User.findByIdAndDelete(req.params.id)
//         .then(() => res.json('user deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//     User.findById(req.params.id)
//         .then(users => {
//             users.username = req.body.username;
//             users.email = req.body.email;
//             users.password = req.body.password;
//             users.save()
//                 .then(() => res.json('user updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });


// router.post('/signup', async (req, res) => {

//     const user = new User(req.body);
//     req.session.user = user._id;

    // let transporter = nodemailer.createTransport({

    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: "ayla55@ethereal.email",
    //         pass: "tqnTXGTy1RF8s2fYm8",
    //     },
    // });

    // const msg = {
    //     from: '"Magdalena" <test@example.com>',
    //     to: `${req.body.email}`,
    //     subject: `Hello ${req.body.username}`,
    //     text: `Congratulations ${req.body.username}! You are a new user!`,
    // }
    // const info = await transporter.sendMail(msg)

    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    // res.send('email sent!');
//     user.save()
//         .then((result) => {
//             res.json({
//                 message: "successfully created",
//                 auth: true,
//             });
//         })
//         .catch((err) => {
//             res.json({
//                 message: 'unable to create account',
//                 auth: false,
//             });
//         });
// });
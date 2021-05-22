var nodemailer = require('nodemailer');

const data = [
    {
        "text": "In sequi aut. Eveniet sunt adipisci quia possimus est repellendus est possimus. Aut beatae repellendus voluptas similique quia labore ducimus labore voluptatem. Fugiat autem nam reiciendis et laborum nihil repellat ullam alias. Qui ut labore quidem aut aut est ab."
    },
    {
        "text": "Qui voluptas qui sunt pariatur voluptates. Dolorum placeat qui. Eligendi dolor eos enim est in laborum iure sit."
    },
    {
        "text": "Voluptas illum eum ad ipsum debitis ad. Provident consequuntur optio eligendi repellat consequatur sit iste qui adipisci. Eum perferendis odio ipsum omnis. At rem dignissimos ut. Sit sit rerum dolores commodi similique voluptatibus qui quo."
    }
];

exports.index = async (req, res) => {
    try {
        res.send({
            status: "Success",
            data
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
};

exports.send = async (req, res) => {
    try {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'youremail@gmail.com',
                pass: 'your password'
            }
        });
        
        var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'yourfriend@gmail.com',
            subject: 'Sending Email using Nodejs',
            text: 'That was easy!'
        };
        
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) throw err;
            console.log('Email sent: ' + info.response);

            return res.send({
                status: "Success",
                message: info.response
            });
        });

        res.send({
            status: "Failed",
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
};



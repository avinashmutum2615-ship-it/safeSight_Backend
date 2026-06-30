export const admin_login =  (req, res) => {

    const { code } = req.body;

    if (code === process.env.ADMIN_CODE) {

        return res.json({
            success: true
        });

    }

    res.status(401).json({
        success: false,
        message: "Invalid Code"
    });

};


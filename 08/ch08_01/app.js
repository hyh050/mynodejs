const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'post.db'
});

const User = sequelize.define("User", {
    username: {
        type : DataTypes.STRING(100),
        allowNull: false,
    },
    email : {
        type: DataTypes.STRING(100),
        allowNull: true

    }
});

(async () =>{
    //await를 사용하기 위해서 즉시 실행 함수를 정의 합니다.
    //실제 모델을 생성, 데이터를 가져오는 연습은 여기에서 합니ㅏㄷ.
    await sequelize.sync({force: false});
    // bulkCreate([{},{}])

    // const user1 = await User.create({
    //     username: 'user01',
    //     email: 'user01@naver.com'
    // });
    // console.log(`user created => ${JSON.stringify(user1)}`)

    // const users = await User.bulkCreate([
    //     {
    //         username: "user02", email: "user02@naver.com"
    //     },
    //     {
    //         username: "user03", email: "user03@naver.com"
    //     },
    //     {
    //         username: "user04", email: "user04@naver.com"
    //     },
    // ]);
    // console.log(users)

    // const users = await User.findAll(); // select * from Users;
    // users.forEach(user =>{
    //     console.log(`id: ${user.id}, createdAt: ${user.createdAt}, username : ${user.username}, email: ${user.email}`);
    // })

    await User.update({
        email: "user02@Gmail.com"
    },{
        where : {
            username: 'user02'
        }
    });

    const user = await User.findOne({
        where: {
            username: 'user02'
        }
    });
    console.log(`user02 => ${JSON.stringify(user)}`);

    await User.destroy({
        where : {
            username : 'user01'
        }
    });
    console.log(r);
})();
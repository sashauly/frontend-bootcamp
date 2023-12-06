# Ex01

Steps to proceed:

```shell
# init yarn
corepack enable
yarn init --yes

# add packages
yarn add sequelize
yarn add sequelize-cli pg pg-hstore --dev

# create .sequelizerc file in a root directory, then specify paths for migrations, seeders and models
touch .sequelizerc

# init sequelize
yarn sequelize init
```

Then tweak `config/config.json` to work with postgres.

```sh
# create db
yarn sequelize db:create

# generate each model
yarn sequelize-cli model:generate --name User --attributes name:string,orders:array:integer,role:string
yarn sequelize-cli model:generate --name Order --attributes userId:integer,isActive:boolean,items:array:integer
yarn sequelize-cli model:generate --name MenuItem --attributes orderId:integer,title:string,picture:string,cost:integer,callQuantity:integer,description:string
```

Manually define associations in `/model` and references in `/migrations`(a lot of magic here):

- User-Order (one-to-many)
- Order-MenuItem (many-to-many)

```sh
# migrate
yarn sequelize-cli db:migrate

# create seeds
yarn sequelize-cli seed:generate --name demo-user
yarn sequelize-cli seed:generate --name demo-order
yarn sequelize-cli seed:generate --name demo-menuitem
```

Manually define users, orders and menuItems

```sh
# populate seeds

yarn sequelize-cli db:seed:all
```

## query for post order

```json
{
  "userId": "1",
  "isActive": true,
  "items": [1, 3]
}
```

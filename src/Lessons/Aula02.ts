// ======= INTERFACES ==========

interface UserWallet {
  dollars?: number;
  creditos?: number;
}

interface User {
  name: string;
  age: number;
  createdAt: Date;
  wallet?: UserWallet;
}

interface User {
  talk(): void;
}

function createUser(name: string, age: number): User {
  return {
    name,
    createdAt: new Date(),
    age,
    talk() {
      console.log('Ola, ', name);
    },
  };
}

function updateWallet(user: User, wallet: UserWallet) {
  user.wallet = { ...user.wallet, ...wallet };
}

const zeca = createUser('Zeca', 45);
zeca.talk();

updateWallet(zeca, { creditos: 290 });

interface Admin extends User {
  ban(user: User): void;
  kick(user: User): void;
}

function promoteUser(user: User): Admin {
  return {
    ...user,
    ban(userToban) {
      console.log('Usuario ', userToban, 'foi banido por: ', this.name);
    },
    kick(userToKick) {
      console.log(userToKick, 'Foi expulso por ', this.name);
    },
  };
}

const lucio = promoteUser(zeca)
function actionAdmin(admin:Admin) {
  
}


import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const email = "admin@unifameccariri.com.br";
    const plainPassword = "n0554f4cu1d4d3";

    const passwordHash = await bcrypt.hash(plainPassword, 10);

    await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
        email,
        passwordHash,
        },
    });

    console.log("Usuário admin criado/atualizado.");
    }

    main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

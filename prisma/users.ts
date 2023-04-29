import prisma from '.';

export async function index() {
    try {
        const users = await prisma.user.findMany()
        return {users}
    } catch (error) {
        return {error}
    }
};

export async function store(user) {
    try {
        const user = await prisma.user.create({data:user})
        return {user:user}
    } catch (error) {
        return {error}
    }
};

export async function show() {
    try {
        const users = await prisma.user.findMany()
        return {users}
    } catch (error) {
        return {error}
    }
};
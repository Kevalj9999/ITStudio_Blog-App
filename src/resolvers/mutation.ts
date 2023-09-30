interface PostCreate{
    title:String,
    content:String
}

export const Mutation = {
    postCreate: async (_:any,{ title,content} :PostCreate,{prisma}:any) => {
        prisma.post.create({
            data:{
                title,
                content,
                authorId:1
            }
        });
    }
}
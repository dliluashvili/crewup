export const afterHandleHook = ({ responseValue, set }) => {
    return Response.json(
        {
            message: 'all good',
            data: responseValue,
        },
        { status: (set.status as number) ?? 200 },
    )
}

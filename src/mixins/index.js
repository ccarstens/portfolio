let uuidStarter = 0
export const uuid = {
    beforeCreate() {
        this.uuid = uuidStarter.toString()
        uuidStarter++
    },
}
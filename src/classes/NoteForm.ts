class FormObject {
    #head
    #title
    #body
    #tDate
    #color
    #buttonName

    constructor(head: string, title: string, body: string, tDate: string, color: string, buttonName: string) {
        this.#head = head
        this.#title = title
        this.#body = body
        this.#tDate = tDate
        this.#color = color
        this.#buttonName = buttonName
    }

    getHead (){
        return this.#head
    }
    getTitle (){
        return this.#title
    }
    getBody (){
        return this.#body
    }
    getTDate (){
        return this.#tDate
    }
    getColor (){
        return this.#color
    }
    getButtonName (){
        return this.#buttonName
    }

    getDetails () {
        return {
            head: this.#head,
            title: this.#title,
            body: this.#body,
            tDate: this.#tDate,
            color: this.#color,
            buttonName: this.#buttonName,
        }
    }

    setHead (val: string){
        this.#head = val
    }
    setTitle (val: string){
        this.#title = val
    }
    setBody (val: string){
        this.#body = val
    }
    setTDate (val: string){
        this.#tDate = val
    }
    setColor (val: string){
        this.#color = val
    }
    setButtonName (val: string){
        this.#buttonName = val
    }

    setForm(a: string, b: string, c: string, d: string, e: string, f: string) {
        this.#head = a
        this.#title = b
        this.#body = c
        this.#tDate = d
        this.#color = e
        this.#buttonName = f
    }

    resetForm () {
        this.#head = "New Note" 
        this.#title = "" 
        this.#body = "" 
        this.#tDate = "" 
        this.#color = "none" 
        this.#buttonName = "Add Note"
    }

}

export default FormObject
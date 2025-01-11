// Library import
import { parseCronExpression } from 'https://cdn.jsdelivr.net/npm/cron-schedule@5.0.4/+esm'

// Script constants
const currentDate = new Date()
const numberOfNextExecutions = 5

// List content
let nextCronExecutionListItems = document.querySelectorAll('#next-cron-excution-list li');

// Escucha el evento 'input' para capturar cambios en tiempo real
cronExpressionInput.addEventListener('input', (event) => {

    let cronExpressionReaded = event.target.value
    
    try {
        let cronExpressionParsed = parseCronExpression(cronExpressionReaded)
        let nextCronExecutions = cronExpressionParsed.getNextDates(numberOfNextExecutions, currentDate)
        let nextCronExecutionsWithDateFormat = nextCronExecutions.map(parseDateFormat)

        // Update list of values
        nextCronExecutionListItems.forEach((li, index) => {
            li.textContent = nextCronExecutionsWithDateFormat[index]
        })
        
    } catch (cronExpressionError) {
        console.log("Fallo al tratar de calcular las próximas 5 ejecuciones de la expresión cron")
        console.log(cronExpressionError)
    }
})


function parseDateFormat(cronNextExecutionDate) {
    let parsedDate = new Date(cronNextExecutionDate)

    // Extract date components
    let year = parsedDate.getFullYear()
    let month = (parsedDate.getMonth() + 1).toString().padStart(2, '0')
    let day = parsedDate.getDate().toString().padStart(2, '0')
    let hours = parsedDate.getHours().toString().padStart(2, '0')
    let minutes = parsedDate.getMinutes().toString().padStart(2, '0')
    let seconds = parsedDate.getSeconds().toString().padStart(2, '0')

    // Formatear la fecha en 'yyyy-mm-dd hh:mm:ss'
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

}

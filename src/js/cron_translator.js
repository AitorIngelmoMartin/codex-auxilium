// Selecciona el input y el span donde mostrar el valor
const cronExpressionInput = document.getElementById('cron-expression-input')
const cronExpressionTranslationSpan = document.getElementById('cron-expression-translation-span')

// Escucha el evento 'input' para capturar cambios en tiempo real
cronExpressionInput.addEventListener('input', (event) => {

    let cronExpressionReaded = event.target.value
    try {
        let  cronExpressionDescription = cronstrue.toString(cronExpressionReaded, { locale: "en" })
        cronExpressionTranslationSpan.textContent = cronExpressionDescription
    } catch (cronExpressionError) {
        console.log("Fallo al tratar de traducir la expresión cron")
        console.log(cronExpressionError)
    }
})


// Script usado para comprobar que se ha importad obien la librería
window.onload = function () {
    // Usar cronstrue inmediatamente, ya está cargado
    const cronExpression = "*/5 10-12 * * 1-5"

    // Generar descripciones en distintos idiomas
    const descriptionEn = cronstrue.toString(cronExpression, { locale: "en" })
    const descriptionEs = cronstrue.toString(cronExpression, { locale: "es" })

    // Mostrar en la consola
    console.log("English:", descriptionEn) // "At 12:00 PM, only on Monday"
    console.log("Español:", descriptionEs) // "A las 12:00 PM, solo los lunes"
}
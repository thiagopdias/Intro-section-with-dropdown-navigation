let featuresControlArrow = document.getElementById('feturesArrow')
let companyControlArrow = document.getElementById('companyArrow')

const showMenu = document.querySelector('.showMenu')

function controlFeatures() {
    const navFeatures = document.querySelector('.navFeatures')
    const navCompany = document.querySelector('.company')

    if(navFeatures.classList.contains('navFeaturesShow')) {
        navFeatures.classList.remove('navFeaturesShow')
        featuresControlArrow.src = 'images/icon-arrow-down.svg'
        navCompany.classList.remove('companyControlMargin')
    } else {
        navFeatures.classList.add('navFeaturesShow')
        featuresControlArrow.src = 'images/icon-arrow-up.svg'
        navCompany.classList.add('companyControlMargin')
    }
}

function controlCompany() {
    const navCompany = document.querySelector('.navCompany')
    const navCarrers = document.querySelector('.carrers')

    if(navCompany.classList.contains('navCompanyShow')) {
        navCompany.classList.remove('navCompanyShow')
        companyControlArrow.src = 'images/icon-arrow-down.svg'
        navCarrers.classList.remove('carrersControlMargin')
    } else {
        navCompany.classList.add('navCompanyShow')
        companyControlArrow.src = 'images/icon-arrow-up.svg'
        navCarrers.classList.add('carrersControlMargin')
    }
}

function showNav() {
    let buttonMenuResposive = document.getElementById('buttonMenuResposive')
    const navigation = document.querySelector('.navigation')

    if(navigation.classList.contains('navigationShow')) {
        navigation.classList.remove('navigationShow')
        buttonMenuResposive.src = 'images/icon-menu.svg'
    } else {
        navigation.classList.add('navigationShow')
        buttonMenuResposive.src = 'images/icon-close-menu.svg'
    }
}

featuresControlArrow.addEventListener('click', controlFeatures)
companyControlArrow.addEventListener('click', controlCompany)
showMenu.addEventListener('click', showNav)
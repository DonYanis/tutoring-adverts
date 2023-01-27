from bs4 import BeautifulSoup
import requests
import time

def scrapSiteOne():
    annonces_data = []
    wilayas =['Alger','Bejaia','Tizi-Ouzou','Constantine', 'Oran']

    for wilaya in wilayas:
        URL = f"https://www.apprentus.com/fr/s/{wilaya}-Algerie/Soutien-scolaire/36.7395,3.138/10/25/1/location_types=home,studio"
        page_data = requests.get(URL).text
        soup = BeautifulSoup(page_data, 'lxml')

        all_annonces =soup.find('div',class_="search-results col-2-3") 
        annonces = all_annonces.find_all('div',class_="search-result")
        i=0
        g=0

        for annonce in annonces :
    # get titre and prix 
            titre =""
            prix_titre = annonce.find('div',class_="title-price-inner").text.split()
            prix =prix_titre[0]
            for i in range(1,len(prix_titre)):
                titre = titre+" "+prix_titre[i] 
            titre =titre[4:len(titre)]
    # get ville and nomProf 
            ville =""
            nomProf= ""
            nomProf_ville =annonce.find('div',class_="name-rating-row").a.text
            test =False
            for c in nomProf_ville:
                if c =="-":
                    test = True 
                if test == False:    
                    nomProf =nomProf + c
                else:
                    ville = ville + c

            nomProf =nomProf.replace("-","").replace(" ","")
            ville =ville.replace("-","").replace(" ","")
            
    # get descreption 
            descreptionTable = annonce.find('div',class_="result-content").text.split()

            descreption =""
            size = len(titre)
            for i in range(5,len(descreptionTable)):
                descreption = descreption +" " + descreptionTable[i]
            descreption =descreption[size-5:len(descreption)]

    # get image : 
            const =len("width:70px;height:70px;background-image:url(")
            image = annonce.find('div',class_="div-img undefined").attrs['style']
            lenImage =len(image)
            image = image[const:lenImage]
            i=0
            for c in image: 
                if c ==')':
                    break
                i+=1
            Urlimage = image[0:i]

        # get modules 
            modules =annonce.find('div',class_="result-tags").text.replace(" ","")
            store_annonce= {
                'id':g,
                'nomProf':nomProf,
                'titre':titre,
                'descreption':descreption,
                'modules':modules,
                'prix':prix,
                'ville':ville,
                'Urlimage':Urlimage,
            }
            if store_annonce not in annonces_data:
                annonces_data.append(store_annonce)
            g+=1
        time.sleep(3)

    return annonces_data

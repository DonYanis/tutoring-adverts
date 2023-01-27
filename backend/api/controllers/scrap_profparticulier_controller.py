from bs4 import BeautifulSoup
import requests
import time


def scrapSiteTwo():
    annonces_data = []
    annonce_nomProf = []
    annonce_Urlimages = []
    #----------------------------------------functions------------------------------------------ 
    def returnNomProf(nomProfArray): 
        nom=''
        for i in nomProfArray: 
            if i!='\n': 
                nom = nom+i
        nom =nom[1:len(nomProfArray)]    
        return nom

    def returnNomVilleCodePostal(annonce_ville_codePostal):
        annonce_ville_codePostal =annonce_ville_codePostal[11:len(annonce_ville_codePostal)]
        ville_codePostal=[]
        ville = annonce_ville_codePostal[0:len(annonce_ville_codePostal)-7]
        codePostal = annonce_ville_codePostal[len(ville)+2:len(annonce_ville_codePostal)-1]
        ville_codePostal=[ville,str(codePostal)]

        return ville_codePostal
    

    def returnModule(annonce_module): 
        module=""
        i=0
        for c in annonce_module:
            i+=1 
            if c==")":
                return annonce_module[i:len(annonce_module)]

    def returnUrlImage(annonce_UrlImage):
        maxLen =len(annonce_UrlImage)
        minLen =len(');background-size:cover; background-repeat: no-repeat; background-position: top;')
        bgLen  =len('background-image:url(')
        annonce_UrlImage = annonce_UrlImage[bgLen:maxLen-minLen]
        return annonce_UrlImage
        
    #-----------------------------------------------------------------------------------------------
    g=0
    page =1
    for page in range(1,3):
        URL = f"https://dz.professeurparticulier.com/cours-particuliers/0-toutes_categories/page-{page}.html"

        page_data = requests.get(URL).text
        soup = BeautifulSoup(page_data, 'lxml')

        i=1
        # div1 means the div in html to get data of nomProf
        div1 = soup.find('div',class_='anntotl1')         
        
        # div2 means the div in html to get data of descreption
        div2 = soup.find('div',class_='anntotl2')
        
        # div3 means the div in html to get data of la ville, code postal, prix et module
        div3 = soup.find('div',class_='anntotl3')
        
        # div4 means the div in html to get data of images
        div4 = soup.find('div',class_='img_anntot_l')
        
        annonceDef = div4.attrs['style']

    # get all images
        for i in range(0,15): 
            urLimage = returnUrlImage(annonceDef)
            if urLimage in annonce_Urlimages: 
                next
            else:
                annonce_Urlimages.append(urLimage)
            try:
                div4 = div4.find_next('div',class_='img_anntot_l')
            except: 
                break
            try:
                annonceDef = div4.attrs['style']
            except: 
                next 
        for i in range(0,15):

    # get nom du prof
            annonce_nomProf=""
            for p in div1.text: 
                annonce_nomProf= annonce_nomProf +p
            annonce_nomProf = returnNomProf(annonce_nomProf)
            
    # get description
            annonce_titre = div2.find('h2').text
            annonce_description = div2.find('h3').text.replace("  ","")

    # get la ville et code postal
            annonce_ville_codePostal =div3.find('h3').text
            annonce_ville_codePostalArray =returnNomVilleCodePostal(annonce_ville_codePostal)
            ville = annonce_ville_codePostalArray[0].replace(" ","")
            codePostal =annonce_ville_codePostalArray[1].replace(" ","").replace("(","").replace(")","")

    # get module
            annonce_module = div3.find('div').text.strip().replace("  ","")
            module = returnModule(annonce_module).strip().replace("  "," ")

    # get prix
            prix = div3.find("p").text.replace(" ","")


            div1 = div1.find_next('div',class_='anntotl1')
            div2 = div2.find_next('div',class_='anntotl2')
            div3 = div3.find_next('div',class_='anntotl3')

    # stock
            store_annonce= {
                'id':g,
                'nomProf':str(annonce_nomProf),
                'titre':annonce_titre, 
                'description':annonce_description,
                'module':module,
                'ville':ville,
                'prix':prix,
                'code_postal':int(codePostal)
            }
            g+=1

            annonces_data.append(store_annonce)
        time.sleep(3)
    return {'data' : annonces_data, 'images' :annonce_Urlimages}


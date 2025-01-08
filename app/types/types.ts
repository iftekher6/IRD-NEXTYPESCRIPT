export interface Dua {
 audio: string | null,

bottom_bn:string | null,

bottom_en: string | null,

cat_id: number,

clean_arabic:string | null,

dua_arabic: string | null,

dua_id: number,

dua_indopak: string | null,

dua_name_bn: string,

dua_name_en: string,

id: number,

refference_bn: string,

refference_en: string,

subcat_id : number,

top_bn: string,

top_en: string,

translation_bn: string | null,

translation_en: string | null,

transliteration_bn: string | null,

transliteration_en: string | null,

}
export interface Category {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  cat_icon: string;
  no_of_dua: number;
  no_of_subcat: number;
}
export interface Subcategory{
cat_id: number
id: number
no_of_dua: number
subcat_id: number
subcat_name_bn: string
subcat_name_en: string
}

export interface ApiResponse{
    categories: Category[],
    subcategories: Subcategory[],
    dua: Dua[]
}
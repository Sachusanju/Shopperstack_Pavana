class HomePage
{
    get blushAddToCart()
    {
        return $("//div[@class='featuredProducts_cardFooter__B8KN4' and contains(.,'BLUSHIS')]")
    }
}
export default new HomePage()
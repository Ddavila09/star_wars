import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'

const ErrorPage = () => {

    return (
        
        <div style={{marginTop: "50px"}}>
            <h1>These aren't the droids you're looking for!</h1>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaGhwcHBocGhwcGhwaHBoaHB4aGhocIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCs0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAD0QAAEDAgQDBgYBAgMIAwAAAAEAAhEDIQQSMUEFUWEGInGBkaETMrHB0fDhQlIjcoIHFBVikqKy8UPC0v/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAQEBAAIDAAIDAAAAAAAAAAERAiExAxJBIlEEYXH/2gAMAwEAAhEDEQA/AMTjMLUxD3GmwuDbAAH1mIVVjcBUpmHsc3xEL2rh9FrGANAFtggu0eFY+i8vAs0mSOi6Nh48gwGHc+o0MEkFuumo1V3xus11RrGHuNhouNTEkR1lP7N4cNZVqkiA0xzzTlaD6k+Sp8Q28jmtvj5t8p9ReYjGMZ3GQS0QSflHpqVAziMDvOnyACoGuIMKOoHErhvF+11etIMWx/8AUJ2Gk+c/ZCYl8ai3IqsFEgAqfE1czCDcgSDuClebyNOpYh7HAscWnaDqOR5+a2fBsWarMzgJBgxzWEpOlrSev1Wr7GPkPbfY9OS6P6/sovy1Op1CCp304UL2KrlhtJw3iDKjfhYgBzTZrjt0nZX3C+D0aQzMZfmbnyXnbHmI3Gi23ZjjWdnw3/MB3esbLG28+PwWMx204cx1bO5syFncNhGMMsaATyWz7Ztl7SsmWRdZdXyYrBu74vF16VgavcbfZeWUTeVpz2lp0qMuNwIDRqTy/lYdqjVuq3k6KDE9p8NSEOqNn+1vePsvG+K9qqtdxzOIZsxtm+fM+Kq346UTmjw9Y4l/tDZpTpl3VxA9hKzuJ7aV3/KWs/ytH3lYJ+MSZi7EnQKpzD2NXV4/Wd81V/8A1H7JjOK1BpUePB7vysgOKybtt9lYUcQCAQbfuqPrJ+DWro9pMQyIquPic31Wi4R20Fm1h/qb9x+F54x+6kDt0rzBr2+hjWPAcxwI5i67nk9F49wrjVSg6WusdWnQ+X3Xo/BOPU8Q3umHjVh1HUcwpzPYxcucosydKie5UHXFMXAU4ICOs7ZCZDqYRrwoHlAVOIYJIIQtTBclbVhOqTKY5JWGzdejGypaze8fFbLiGHEiFkMXT77vFafH7pUHgu2tVjA17A4gayWk+IhV/aDtNWrsymGN/tG/id1a0eMNf8oB8RPkpMdhWVWd5jG698fKOjpaC3zjoV1TvnPTPyy+GxhbRNID5nBxO5gaQg3OutDX7PPFN1RuVzGj5gfsdVTvwr4B7rp2abjxBuur4vlmesibKFqEHy3ROGDCZJjpBKZXpFoGYFs/3CExjoun3zx3dlyplxqcfw+kMPSe2tTOYO7sw8Q7dpAWTr4ckkAwN/Dop6lTM1gnSfcrjGko5/x5bvV1VqL4f9I0XovZHhZZQD4u8z5CwWM4TgTVqsYP6iB5Tc+i9ho08rA0CwAA8BZYW71afqKypQB2uqvHVRTaXPsB79FoajOi857ZcRL6mRvyMt4u3/Cqc/a4NV3FeMPc4Fpyt2jXzKO4R2iIc3MYdzmAfLmszUdIvtdDGpJB5Ke+JgnT2XjfEBWpMfvMOHWFQPhVXZ7iOdhY/Vv02PkbeBR2IfkkutGq4upZcq3K+IaxpM+A5nosvxXiDoubn2HRPx+OzHMRYaDYD8qgr1i50lKTaLcT032TzUQ7Suyrwj3PlWlLCSy410/fVVND5habrWYSn8s8r+Cm+FczVNiODERl5aIOi5zHwbXuFuKdHMC42EgD2lU3GeGuEGO70Fwp+35VfUKx8KelVVXRqGS06yT7ohrimSweU/D4pzHBzSWkXBFih6dSQuv0SD1Lstxz/eGFrz32a9R/cPur0ESb/wArxzgXEnUarHjY3HNp1H7yXrTHh4a5pkEAg8wdFOYKKgeqiq910AyFI6nMJrmIAd2KbOXdTfBndRPw87X2KJpmBBRAGfRgqN1lPXOihqtOYGbbhAQV2SFhuIUv8R/+YrfVGjRZDiuFBqvjmPoFfFJg6eHcwyJgz7An7LZdl6hqtExMhjrxmDrXHTWeiyLsXILGuJB25eManZb7sfwEtw7sS+waHFgmCTYT4C/mq5tSaeHPfh3UqbJyueCAReNInoRZZDG8MqsPfpvYOrSPcr0PA52sc8kAOMtnaLA+wR4ruJBBNokA9Jst+PlvMyFYxHH6xYyhSY0j4dMB0tBzFwDrggyN/NZrEU2G5YGnmwZfUDu+gC9rdhadaPi02PMQMzRMeOqCxnYPDPEsz0z0dLfR0n3W3PfOfyhWvGhhRs7yIj3EhF0MG9rHVCLNnvAZmybRIBG+8LdYz/Z3WbJpvY8cj3Heht7qk4lwevSY1j6T2BrnuLiJaXOAAhzZGjOaq/JzOf42iZRH+zrh+Z7nkWaMoP8AzO/gH1XplQZRGUeKpf8AZ/w8DCtfkylznO8YOUEdICvOJ4plNuZx8BzKz59J6vlQ8b4gygwvfto3c9AsJxujhK4L6D4fExlIBJ2e0/K7qJH1UfbXHOe4SdST0AFgB6rJF7mnM0kEbrTmdTzKLY5iWZXEEEEc9VXhwkg+qvmYtlduR/deNDsfCfoqfGYNzXQdfYjmCl3aB+BxYZWY+bHuvHjY+VwVZ8Vx+d0D5W2n+4i2Y/v1VBg6Z+Y+SMc5cXyWWtOfQXiL+7HVVzUVjnaDxP77oVqXPouvaUFOCjlT4ZkmydODuFYXM+eX1/fqtbRw8gz4Ks4bQDQI33WgwoWVu10c85E2Cp9wDdFPws21snsp3aBvCmpXLxyn/wBIxTH8W7OvY0vY2QJNtQBqfBZ5lWbEQRqF7BhntaBYHa4tG/70XnvbDgYY81KPy6kD+nw6fRUz65VVM3UpNlWYfFXh1jzVg11kqh1hgr1nsdXzYWmeWZv/AEuIHtC8mYLr1PsgwswlOdXZneRcY9lNDSOO4ScU2g8EdVIQmSIJSk4JjGQUG5UTXMUWMrtAuY5eKgw3xTJPy7DeEgkqsKCq0pJsrhzRFwVFZMPJ+z3DsMHB1QvN7NEQf9S9A/4gXsLA0spNi2hMaDwXnjaWUyy3TYq34ZxrJ3XiW7tJuOrTv4FbWWe0tg003hzGul7WmwOkRrHiFJwzCZbkW23QHZmnhs73sqZ3uklpaAWidAIm0891rKDAAq5hWuYdl4G2n8K0YbIShqjGp9Vm6WrhpzqTHKSnBSsalKMNqVGsZLiGtaL7QOi8349xE1Hl+jdGjkPyiu1faHO8sYe43/uPPwWVqYyQtuJnmjMZ7jri54nZo91UuCm4vj/8V4iYIH/aFDScXNkiFvLkKgMSO8jsPis7IeJI0d+VDVpZj03UzG7aCVzfL8meIvnnT2tUbypHOiygeVytFfi3S5RtSqOlxPVcatPxn+nq04WwZgDqYJ97KspiXAI/h/efqp69L49tdhmDmj8K4g30VbhqQsGvaCeZ+ylcx7ZLHMfHJwWLolaSniWyxx2Bn/SFDRrwyf6nn2m/70WfZji5sR3rt8JifZH4qqWFhOgBH0/lH2V4aM4hgYGhsxufcquxbA5unqNuqr2cZ2DbeqLfi5AKd8kwHaPhnw352juE+h5ITCYoixWx47Tz0ngC8GPEXH0WFoFVLsZdTK1HCMMKtRjJADjdx0a0CXH0BXo+C45hn1P93pvAyANYZ7roHyt5wN97ryCk+D03HNEUjBzNcWnkfyErCe74WlF5lFuWN7G8ffVAp1BLgD351A+p/K1mZKEa5RvfAT3KKOaZBzhcxE7GUYLLgMJrnwgHtcCm5AoW0ibiwU3w+qA8ha7uybcyNCddNihaxABe8wIkTqUS853OmcjJNosNonz15IbiNJjzmYe9plI0A0F9Sf3mr+/4LEGH41kIcxjwAbPEtjwI3XrHZLjJxNEuJlzYBOkgzBjY2I8l5TRfmEaOH9M28unRXXB+NVaDiWObJgOa4S0xMTuNSnNl0r5er4fEd5W1N0hYLhXaum8j4g+GTvqw/wCrbz9Vr8NigWgtII2IMjyIV/aVFi0AWQ7Y9pMgNGm6+j3D/wAQfr6LnajtX8FppsP+IRc/2A//AGXmWJxxMydU+ZpyJ8RjHONyhXYiyBOIlNfVWmlapa7w6q8uNsx9ipa+KBFvBV9c993+Y/VcpHvBO9eE4tmOt9U6hcoIVUTgXSVy3WsTPCgcEXWCGIUmqHi58VwKXFNhx6qELWM77FYVsuHmr3D8ObIItmHPQ9FQUjAJ8gtbwiuC0ArPrw2+OaL4dRDHguY3M2NoEjeysMe5jjnc0AgXLbSBJ11lSUKYIsSqvir/AOkHXXyUa2zA3Byc8u1JJ8CStLjxnm4EX0Wd4cMz52sFoqjYd+/RBxnQypmBY8C+hjn18tFb18S9kB4Y8Aas1HkdfIp9XAFpzAS06dOhhEtYY0AQMAEgtJGh0WHxmHyVXs2BkeBuPqt9WAFgsZ2hZFUOn5h/4mJ87+ifPtHfoyk2yN4bgHVXtYwS5xgD92VfRdZaXslxxuHe8lgeSMuaYLeg2vafBFZPRuB8DZh2Bo7zyO8/cncDk1XTGjLcX+yxze3LBrSdHPMD9lbYDtLQqCz8pOzreh0RoxcOaoy66f8AFH8qH4zZuEBKwSukrgeNgU0vEIJE+pC60k7oT4b3ul2nIft1YWQHimOxYDQ1rrP7xA0A2B8svqVBgMVBeXtDi6RBuL7gc9PMKpYS95vyHlCtsNRGeAMwbBLSTDoItIvCd5yHu13E0RYwRI16qWm8gd45gP6v6m+PMI3H5Ill2kAjmOh6hVb6V7WOxVb+xNWVPSztdCD56eqKwPEalIyx7mE6xOV3i3T2VRRaRpfm02BPNvIo/C1W2zElskkgAvbaLjcBTTcxdUuJcbE3m5BJPndVuMa8C4McxcK0bTsMsc+h/lObQghxnvT1jYeUg6zoVU7wryz4MJrqqucfg2FgdLWZpyug5SWgTpJ391my5aTuVHXOAap7x8T9U+mwi5BHKVM7EZbCesQPUi5UL6s7Qn16KFmRWCqQUEE5hhZ2LlXbjIlDrlCtaE9ynFAce3Q+SDVpiactPqqtVz6R1PIjL3W+JV7wslsKpYyQOUfUhXODZBHJT014abC1LQqHiuKa6pkabN+Y8zyHhdXGDBItrHos/jeFPbOW99eet7+BURr114XXBKUxB1Ku8S0hxG6y3CX1GABzDGxWgoMLjLj5BNXNmLjAlj2xPkoccMpgGyEcSx+YWaeXuEq9WUrVBK7uWyx/aQf4rByZ9z+FsHtkxZZPtHUDq4Gha0T1Jk+SfLHugmVMjc5vyB3PJQ8PrG8ne6lxFIOHhp0QOGdCuTYxvtf08QU57yBmZ5t/Cr2PRlCspxS34X2lqsENecv9pkj02Ws4X2zYbVGQeYv7FedYml/U2x3CgZXvGhHNGDXqvFe11Ngin33Hcgho8ZufBZnEdpa7/wD5CB/yw0D7+6yz8bAgnwGp8kPVL3iPlbrG58UfUta7B9sqlN93h43DvsRce60rO3lCBLKnoP8A9Ly1tNrBOnXc+X2Tfjv2DfPXzTwIMRgcgzCvReRs1zptyloVlwXiILoIEmB5/goetw0nQX5Qu0OGOaQXnKBcDV3kNvMp2ywpPIx9fLsTGwEjoHdekokYuQA+mIjkWuHP+oj2UT+IljMjRAmSTEk9Sgfik6lTDXT2MLQWn8g9U1oA70+f2sqc4iJ1S/4gYT8heU6oaS5nymMzOcGd9DaZCIo1S95kBo2iMwAtE7mIv0Wa/wCInZMGOPP3U3nT1tPgUX0nU3iXAAMeSZbB2O+9iNyslxbhfw7tlzT7HkUxmPPMogcTdHO3IfhVzLyV8s5XF1Grx9RjvmaFE/BsdoI67K/sjFUHJZlNXwhb1UBCZeUtOpCPpPlVSfTqkJXk50tSbKvxdKDI0PsUTSrKVzQR46qZ4VZsLhJzGIkCJ9gtHQoi0RfrKzOFolr7TGk+MWW94Zh290k6HqT/ACl1NVxcBvY+kzMG5p23jpvyQ7OKsNnd24mbeyu+J0O4N7xrtpJ5qiOHJmW5gpbSSrF2MY8AggQT9OSKw2Kbe41kX8NVTMwVMWAy+LRPkjMNhGN+Vs9SEsX9Vw+s1zcovPL6od9OLJMeAbp9bEiLlpEf3R+7eieajcBPe1vevbWdLXufRee165fULzuVueLEvpkMN3HL+SouF9kGQHPk+Nh6K+fDO83pnWNsFVU2w4+JXo2JwmEYcpEu/tbf7plPhFN92UmNHUSUeheGIYJKMpCAtgOAMP8ASz0g+yCxPZo3yuI9x+UqPpWZ+PEyY3QdR2d1rN2tdWvEuzr2d50lvNt/UHT3QjKAaLaJzIiynYem1ug8Z/Kca40F/wB5rjh0kLrfD2QEYbJk3+nknZk8nouZv26As/jEW0PIa+qHxFhJt9vFNa8gSPXcnn4KvruJuZPIbH+FMho61SbqF71L8Pc6oetyH71VxNIOlOqH9/fNKg3c6D6pr73QRjXJ4C41qnYJkgABOgymd1PUpwAn4HDZjfSbz0UuKIJJGkwPAKbTwI1pU1GdDqPcJm0clOWd1rx4FGjEpo5mqpxOHIuFoMMYh2oNvyPHkhcdSg9D9USixniEsu6t3UmuEEEHoU2lQDQW6g9P5VfZP1VbXQiqGIXauEABIJMbKJtGRLTB5I8U5sWLHq+4TxOCA46C32WSpViLFGUaqmzFSvUMMBVoyNpnoR9t1WNp5Mzed/K/8KPsfiXBpDjZ8jXSxGiMxtQNLnHab+SLNXzUJOxHXzifqgsfxNonLckR00+v4Q2I4mS3KOvoqtj5J6InJ3sayo50lx/fBDse421Kc6q0A+CL4Y9mWdSquQuZeqtuFYUMaHPPhOyE4vx8kinS10LvwoscyrU7jQcu5H0XKvCQylmEBwIuddfZRrTEmBwGWHPMk3JRtbjLGAht3DYbIelSBAzPIjql/wAHpvOYPIBm9ot4JWngjA8Ya83MKxdj2aZgT0WSxPB3sJyHN03VcKj2G4I8USiV6N8IPGxWO7TcD+GDVpWEy9m0cwjuFccGhdfqrTEV2PYWmCCCCPFVovM6ef0qgcJC7OyAqzSqOaZAB0OsbeaPpukSnjC+8OXEiYuUz4zf7m+qRDyRBJGg09gPEoVlMvudeQ9gOn8qRzzl6uPufwAj8NTygEi5+Ufc+OyjcUr8TSDW9fyhKGDJGZ3dZzOp6NG59lZ1GZnQbwfG+/ohsRJdrMWHgnKVgGoQdBDRoPuTuVGynbzKKFNSUaBy+MlPcLATKd0QBoCN9NlOyhfwCdTpCZOgE+JvA9YRaMJ8hsAaiEO1shXTMNnpgjUa+YF/dV7KUTb9hTp4EazdHYEZmPYd7jxCZTowE+gwgnomDsK6MzXXbaRv0I6hMecwjUt16tO6Lw1Oc5/dELVYWOB2+xGiJQrn2KeDuu4kd6PMff6Sm0gqSUKvbLHFvJWgagOINuHeScKn1KYcOuxQweWmD/7RFF8hSVGBwg/yEf8AQtOD8RLHNn5bfTdE8Q4uHk5XT0/hZ1stEWOv70UDmGZRD1e0XEotlCGlxs3nzXeF03vwtWo1rc1MgGdXDoOk+aqhxZ9TuuyhvKYnbdGmu+HPplhzRM/RD4zirWHJSaC7c8lWVrtIZMnlt5rmEw2S5u4qf91p9vyNh2fxJewkm8qi7ScWeKjqYMNBBtzgH6qbs9jA1xYeaD7X4X/Ea9g+cbcx/H0Sk8q6v8fAHCcWc15znMCIvstzwRzQxoboRJ8dVicDwF9QgmGDrr6LT4TCfAADXlw5fjkUWT8Pjf1euYDtKj/3Jr5B97+vNCDiEiwjqefgh340xDnEeFgjDoPinDW0iMzQAdHCCPAtQrce1mhDuoBH1UuJxLSCHGRz/lZTH4vMYb5u/uRJqOu/qj4hiM73P0kpuHrO+WVA7ku03QQVtnhz3rzozx95K5l6BOBkJ2UpGsKXec2NGifMyfoVdvqAS7l3W+lz+7qlwLbwNyBPIKyrPEMYOayrRym2Gk7nujxOv1Q1WncdXH0CNe4d1o2jzPzFRZZcwcg7990ghpULDqP5Rr8PDR0YPU3U1Gl3W/5fqpHs25m3g0D+EBXspQ1xjomCjf0HsrH4UiBu4fRcfT+qAWFZEDaSPsEz/dem/wBAp3Mgkj/l9ypj8s75r/vogAG4bveR+qYKIDSNz/P5R9MwTJ3j8+6Ec4B0HdAQh+TP6+kISviWmB+7J+Pf80b/AHKqKrSCE5BU1czHQfcqJjk179fBcoBVEUS1Q48Sw+v77qVgXajZBHMI/QqKD4siXtcW2MH9shKbYeAeatGhVSiCmwxBUj2iBAgjUzM8rbJ7Rf8Aeq6WqVD+D8YfQDmQH03/ADsO8iJHI9VWY3CtdL6emuU6+KTkwujSycKk7iIGgn2QtbGPdqYHILldsmQPGE6pw+o0BxYYOhsQfCE5Im2n8NxJY9p6rbfG+KGnLpczzKwDGweSuDxR4ZDXQfdLqeWvHWTy09R4G9uQQuI4ixoglZI8QqOsXaoXMSbmSj6nfmn4v6/GTmkb6+PNC1OKuOghVofzToRkT97Tq+Ic/U25IfRSkJFqqIvlCSuKZtEkgNBJO37srXBYZrO9Zz+ezf8AL16+i055vXpnU2B4cModUn/Jof8AVy8NfBXFN8AAGByAEDwQlJ5IXZK1nHMX5RYc5QByeT5Bv8pj6hJaRtm9z+PqkkuFqMpN0Pn7QlnDXX/tPuUkkgKw2LbmEmwDfaVPQrNJF9Af+4zr4BdSQEzHNOWCN3KB7vrHuupIB+b5vAewCZUqwHDr+CkkgOEySOo9xKrsQYfPL7E/wkkgAq1WSfEKCqZdPRcSTIE91wi6NOAEkldSmhc1skkpATF4bN3m6hKi+RfbUJJKgmBGqTn2SSQYWq8nSyhISSQVdKY7EvFgTHLb0SSThV27jJ1UuRdSRTiGpQm41Q4aRqEkk4mn1housB8eiSSPwfp4E+PJFYbCF19BuTp5cz0SSTn4cFvAYMrRA3O58fwo86SS6pMnhl17GYdxhPzpJJVc9P/Z" alt="Obi-Wan Mind Trick" />
        </div>
    )
}


export default ErrorPage
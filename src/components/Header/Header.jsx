import s from './header.module.css';

const Head = () => {
	return (	
		<header className={s.header}>
			<img className={s.logo} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAABDlBMVEX////m5ubl5eXk5ORmMwHj4+PLZTLt7e34+Pjp6en8/Pzu7u739/fy8vLx8fHLYy1jLgDNeFPHXiNgKABcIQBfJgBmNAFvSDdcHwBPAADy8OxZGQBVDwDh39tXFQDm6+3t5+PIWRhSCQB3UkPPxL/c08/EsahIAABSBAChioH88OywnZW8sa5qKADbrpy1pqJoNQ3s29aZcF+WfHKOcWPSy8p+X1PhzsVqORzCraiBTTSihnqKalqvkYhzRi14TzhoGwCnf3DDqqKCZFp7RCZlOCFfCwCbY015Ohivi3tyKwDSv7qIWkjlxbjGVATXln3PiGjMcUW8oZjgt6jQhGPLbD3Uk3jZurBwSzvNp5t3v8YiAAATr0lEQVR4nO2da0PbRqKGZyQHaXRDQXZjbNkIsF0cm4DBQFLIZTltdrckm9Ntt835/3/kaGakkUYaXXyRb4s/PTUhsd/OPH41HkkA4IcEIZQJQQEhTFoeSYQUTCohiSMDky4giycTk5lFFiaDJ50nFZPCk4bfHCXZJ5RFABMUkJR47jmt57Se09qItF7IsvyCPslIYgR5ohkJSOGJpvUiJB2TwZMV0GvNxESTySKaESadJxWTwpOG31JEKIvIW4eMJEZyIhj6nDxLUCArqILIZBaUgCwZ3gyMckHJEek8qSwelQ8qP7IoqDKRxSbcItNRiaajlJ6ORZMQ9a/J7y4yCQ3BJIxNx9xJWHo6bkZavVegqrRgJK9dSWt0pm5HWpGtyqp+Dm8VqN6anvVJMsWCL6n6qrxF/1uSpCAoRpIcEmSEMGlZpPCk8qRjMkKSA8ET0hr1C+QTjUfOIBpURP6LDlXvUxBUmjRMKJdgGEJEksRITjwXm4SZ0zG3b8mZk7BU37rpOlOrsr4ll1P91rTTqWPf6tvTTtebltWt1WpblNZauzy4dmo1F0pL6vKlBS/q8hGJu7wkEjwjyBONhyM5QVjrsspTpPWU4P2Hh4eWi19nacHLTPCMVJkJnpHGkcS0niSicCigpOqX1bekPNXn962pP7Rq3Tuw5i6fPwmXm9b87bTn+mHV6uOK0tqtLq+1ayStwVakld/ll7QGkaN6Mg9rtSYZWwt2+erXIGg8zGMSIyggkdZjgudJ5UmXmOoZWcoFHVr+TESlu7wUkc4TFryk8KTxhLKIhAAFlOrycvF0zO5bnODlmfqWOenWgrQG6LnLF6SlvbWDtLp3laW1M11+WA/Cqp28eO7ycRJ0+b4bhlU79+ZflzdW1+VjDUJiw0pAkZ5ExLfTSF4yaxCywZPfIKxzFpZ9y4ZQmWEls2HFSGV6EhGRF8olNphiVFU7naPL6yM2D2uN0Uxple1bGWltYZeHqMHCqrn9StLanS6P3kVDq3YJ+IwMuJlpraTLyynBA938yWZhNS/otxgvZGiBzs1gcNM3FbipXX5RZWUPq+wGoXFDKxxW3n292242m649nICZB1hWgygjr/INYg1dXu1E9cEd449IhDTz2nXCJx33tm/OnxYv+KWmtYZ2qnba7APxwX93xqT3/rrt1GIPu3utoA1sp2tNy/4AXveG9o9vL16f2jXu0bjsR1/LbkxaK+nyvOpVLzygvhx/7HYPb590ZHifEnHZ7pikVdjl5xD8gl2e5Qh5SgwhESmiAcZIh2xYMbJMFkzDcR9o30KTD00+rpr7N6tgWMEERb0h0SCSXUJAJAQooGX0rcIjn5y+pV874fi57Vt0AUdCyoVz2KzjR9t13ZNm3WlfWTP2rRmOfLamy6MeHUbNV08mij76kOb1xvjxdNefTJ7G9z//eKubM6W1g13eUN7jseXUH1WUPt4xEEKQLoFZ/etbY1PSWleXHzv4MPHs2qBfweYs1kDlxYDkkaH6Ve4NJI/VCl6HeucU94f65U04CS38z9F4BIQPGyEbVjEqIXjhAJtP9fN3eSlD9WqaktPRsi7a+APxbGgg9pyUno4LrZ3uTJc3b7HfbadHRs/27QBfaVodMrDs/+kPRj3P2sK0Vtnl3wVH0z/7tardHUIU7baZeV1erq7LR6pPdnmh4AE/cIoFD9UswoKHwarW0OWqeuOXiZEreJMJPiKDJ50nFTLBM9IiKlZ9juCjCVd6OmYJPvdbDDrh1KvkkY39+U7QtxZaad6ZLv93sgTo8MMLLjmtXenyf8eN1P7HP/llrI/m1qQl6vJVnedzhUeW/evrTpcbXM2RUlrwm9DlIcsxIjxwoFZMCk/ZgjeGTRqWafzML2N9Vgq6fFnBGwLBC1UP2bDKomQcK+7y6gh/GtpND+joif9gdKbL6ltZgi+h+s1qp/0zHEwdYY1Z/3RJQ7WdRr1ed2onXmZGG9hOV5CWeoLDOsSbcX3pW72Hy0Pn9uH9xXg8vq67U3WL0lpBlydfUHQv8HM6daqqAVVBCPtt8GMfbk2Xr1zw0BphwzsPKnvOYut9FkS6fE9CyRX8Il1+dtULg1lNl4cdMg/PtcRp54ygh395ob4lEPwsO5I2qMsbr/A8POxnn65vCDLawHa6irTMRzwP68MqL26wO12+Rbr7Ocg4Z3+WxZo1n7Ov+Q8AsXIxU9IwIZhHCk9qFukQQWuIDw+7PQVr3X/OgihOJk9mFlmYDJ70LFIxKTxpPKE8QoSCYMKIEGBjrVSXFwi+uMsruJfaX0yY/lJxOdNRXqzLS5vUTvV7vORw1keLp6Vqm9BOK00L4fZgP6jSgmkZYPCptQlpVdnllRG21qFnJQRvfI2uY1OsegmZj+ftZksk+BV2ecR5DBLpo1xSeFIjAhzpVObghFrLiD2Htd75196blv/Cywjej2z8oe2XEK+s6pngEU+axhMqpkj1Wvm+VSx4seoHuGu1ezA5CTsH+wcHb16XmYTIePqFfK2G08qahLvR5b/gt3luyOm09vb2Do6/TfAxXF5ayPLHFV0+zElrN7q8cYi/qBihlOBJWjiv/71TjrLTUq1BmNUGpFVxlwdjvBbv9mGqwQdp7e3tH//2VQn3y6cE/xRlFaW1AV2+hODLqB6TTpZjMGl4Xct+C+LP0cWaVpgWzus/bzw91Dr+RwIyem/b8SX8egsrHGHBawnSeYq0LqI5VV+uy+cKPr/Lt8hE/DdInkgmxdPy8zo4+DY5SixEgN5pm/+6oy7uWzvT5cl2SbcDQGqDIJcWFdiES6v3PZFVZlo70+WH5Kgnyig7LTwhX96x3n73vZvMalPSqq7LX+IF5muSUaLLp9MiAvtqHcmS/vTFTWdF0tqULr8cwWNCTPWBtjBiwWtY8AF1BGnhvPZ+B+BKmBX5TMS/i/fwooj0iABHKlqu6ivu8nSXd7OHeMFjykjLz+s3AF6JwxL0rVzBz3em8Nq6PHrnH1H/cOhBwfJDZlovZ0lrl7q8Qpa2DoWLNVuZljyL4Glu5VWvT3E3/WiIVuMXSWu9XR5rDPGkiUjhSc0iPZA5+JV8JGrx50LViz4TaVpH1vestFoJwQtVzxNVPU9aFgnfOoiIjbVKujz+SHTutXASZnZ5Pi09J62ob8nlVD9Lly9QfdXt9PAHvADB0spvpzOmtXNdXsNp1cc7llZVXd47i6VVossHaSk5aeGXKlJ9dV1ejlG+1ucXPCHvxE+reWMmBJ/T5Ys+E81FBZ+p+jIhFPUtaaEu3wnS4gQvL94gSgp+0av+rLjLx9JaQju1m2/RLnf53LSO92dKy89qoMMd7vJSYHlT1OXl3/8jzEuclt32s0LSuu+LMbvgZ1F90LcSgqcEwOQPQV6iLk/GFfldU9zlFWslqgdsrKWmowSX1OWHgi6Pr8HvD427Pw+S+kr3LX9cvdOVvAu8mV9G9KSr7e7y5LR8snSabqd7v2vG0VHn28HBfm5a/hwkZxTnbBA0z5ofPbDtXR7ckpMIxGkdHO996x+hoxYvsERa9ctBKqNkWmhQr9nuxbZ3eXLp+B8OaVqCLo+/2D/y/9zdyygvrss3z/GXa+TL2Jjgk6q3yO4Bd7ruLr+A4DHpZDdS905Jd3mT9q39f/1xZyr60d0fxwepz8Tm+SN9MWaO4P2f9sn+cue6ctWL+5aUpgXW5RtjBLO7/P7xy7+QP8Am36jwWVqNOh5XJa7gqdJwG+/RnILfkC4PPVwhnGs9t8vvH++9wSm0vu37wg/SajijkjvA9RE9+7g+Rtvd5SX1E34fn/yXnX/kc7D3De98g77wD3BaTWeElHJpof5n6rgzD251l/c9Sy4f7/Zh4br8wfGfnl8olL9e4m/IhhBJ0W6bHMG/QJPwao2f1OrvFTV7ly8neEqAXNS08Q6ku3xqfQsLH7+gO4RklWk9Ifik6sHrX7G0Lkmtm0Pws6kesLG2pC6fUP2E7pUH6S4vWA30hf8VxC4PgadUcjrKHJkeDWtq15q9ZXZ5oeor3zUCyMfVj69LrjSTnVyw9NkFVr9Jmta7dq12aGx9lwcm2WSDL1pdcl1+//i3o7JpWSMieHfst1P7FGx9lwc6vYb8+Uzr8rHtlHK26pH3QC4CenIxbgc3bclctllLl59F8AGBf+C50u4p4i4vSgukBC/o8ooxppvhTi40XOXPFGVZK/TZqq+2y2N6JNcXwWcXgNLr8sWCN29e0avLuo/klG37wf+D8wo+q8tXdjX+jC7vE9kCXjvpJy/wNntaEemTKd3h5dT7AM9DcheSbV+XJ0Sua0pKxLLS8u6DXZbt2xawyHGPDbZ3XZ67uEGHDi6yBbfkHhuAV/KzBN+679KrBtnkggm3+D+aAy1L8BV0ecV3ZIIUxJGaRTpPRpKQ+kCWBN/6f3fY5fFPsz8TLSXUuhInLHigTdhF1dunnv/66c2mPqmB/v0/p2eRiknJIi2DYsEogI21YDoKBL9Il8dES0TzQpEKunyQlqBvhYLvTz8HWTUccr3rFlnaqj+iJe+xEap+JVdmMcjgqtW9srtGss7m7LOdzo5LtznRS5jULo1d2GNDCUJywR9napbcvyVKS7HGP4VZ2d2pR184uUhVrTtAu7DHJjw1ipy0X3MHqGSXlxNd3kD642V4ZobtXk3oywY98gFifzFSgq+oyysiwfOkFpOuMK0LKLyW/IliMv3ndPmU4C3j8TK8OqMTZQVadGnL9QKZK0zr2aQSXWeRlkXpLp8leDod5+3yeDChJyJj+1SNuvwL8Rf7qb4lI2tgs6y6U5YVAB/I/4TmiAymBQS/QV0ekMuTXZGPssYVuyiEBY/i34tlpmWYvQ+xrLwoK/BA5rf9gfy7O7DHJrompWmTcdC+MKNLGiBz8udxaj4m0vIeQrc32lxWQdPyj6mipl95WrH7VcvsftWMoICQzO5XLSB8l+pQ8DEKSlftZKyHe2zIT/H3PKK0wpuYDsKb1jS6QyueFRgTw9e6/1aCPTbsftWMNJ6QgAKtc8TuUh0K3idxl1+64EMCjzSus78Afk4xg59a6M0eNyFxl6c/NXXvthvOwURW4Im0klp9CjQD/32sy1eo+rDLS4WqX6DLU9Ku60FcRqR6Olm/xgUW9S3tJrhhje1ee3xWwV2u6YppFfvl19flgwZvnpJJ9cPZwIKRvCjFdnJFaYXX+Wx/jH0O8mHZ+Jd3Zb88lxYMt86cjc1kWv7Rcih8ltb/ndBJSG5lLQyr1iUxrny//Cyqzxd8pup1GaJLGlf3b5YUqT7I7ajzhgjfT4sIfkDDat62UmH9FdjspE9LhkDwarHgUfjWy6ren5MK81iC1GLCMleMYrJCagVx+REYTPVmSMDCwqddXu+3g2BTWYEL+mlYc1+AmOB50rNI5UnJomQcK+zyTOveK1oInEZfh1Kk+uDA8Ej3hU8ahP4L/YoiPQvBFR1Z9klnWYIv7vLSSrs807p+Gtzt9XCoI8Glt9DR3Tf8+umdrNvpsLxX9KPVPvfAju2XT98rCppXwZ0AG29vLNGFyshzCvlDjWkqrPEJncuN7y2W0QrTWlGXl9gXr8YovAD4yfQ1SQv/NDiCDho8IHfdCu6dG3t4p0HU3Ss9WKv3f2ORLi9SvUjw8S6/AsEzUkE/PJpx3GHLTKiekEUXFwZ8VtowOGTEX1/Q3xAJvqzqMwWfrXr6Ovz/p1Ko+pAgT4HW80jhSeVJx0SvVIMewvty+kd/HfIblhQOK1OS0BMRuaNxWY3qgfLq3z08rPCLDrZThqRiUnjSeEJZREKAApIStOo7mUJzUA9vjeF8nt6BxKoyuiDfb9/GsvKGbpCV3R2Sv3n3zn3NSMvPQ7lmlxOx3bfDjqqjKC2T7OhuXIRRtd59OQzTbZ929HWf+1pS9SUEn9PlI9XjOT6JXS7Kcc+vxx2T/K6vevM0Sku7e3962Ij2z/csKCcEX22Xl9JdXlXVQOHFRBVeTIHW02QS0tVe/LJtTv3k0/R+3PMMVQPkgNK5742mHw67DhuETedCw78bCN4nI4t0/JbySWVvPZ+06LmY1jMFT4fVUgQfka91ZPa+dOO39rGdevPk8NANdjk4zYYTxWm3P7wzg7M5lyx4rVjwa+nyicvoqqBz321mnBYcf9j17kPPRGu/Yvpa08KkPT20m05BVD9dvKYprDmtWJeXVtHl2RINI9Pynu7tbrMhGGO20+zWr955JA8sX5HgV9jlS2h9XsFzpCbIxGQG5OfceRo9NNpuu1lvkEe92W63nZ+G4wkIVt6j37B4MhJULPh5VQ/YsFpdl+dUHxIkl+Oc9G8Go6H/eD/o9fueYdC9APgAUooEX4nqN7bLp+UVW4ggW2tpW4ewYL/8f0mXr+hWIivv8rmqX16Xj1QvR5RYtklQJPg1d3mVGS2TmMJLU77g06qfkYSCF5BeTAVvPaJ1dvk4hYs1wmFVteC3pMsvUVn/JV1+q9ISdnlpNV1+RsHzql9Bl5eEXX4rBb8O1QM2rNbc5bMEvzLVZ3Z5mdEGdvnNb6fPac2S1hZ1+SzVz9nls7ZTSvN0+SUKfntUny39RIPIVv3qBb+6Ll9isea5yz93+YrT2souL1fZ5YWCL+ryGyz4kPRVqx4IhtValm0KB9iKVZ8UfDTontspSea5y6+sywtUv8Q9NtvZ5XX/EWidJ2MWsorJ5MkUkVJEekQWT8YspM9CqsKC2YouL6+3y0cD7P8BsyNOPiW0AqsAAAAASUVORK5CYII' alt='logo'/>
		</header>		
	);
}

export default Head;
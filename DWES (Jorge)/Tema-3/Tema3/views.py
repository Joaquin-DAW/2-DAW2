from django.shortcuts import render
from django.db.models import Q,F,Prefetch
from .models import Libro, Cliente
from django.db.models import Avg,Max,Min

# Create your views here.

def index(request):
    return render(request,'index.html') 

def listar_libros(request):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.all()
    return render(request, 'libro/lista.html',{"libros_mostrar":libros})

def dame_libro(request,id_libro):
    QSlibro = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libro = QSlibro.get(id=id_libro)
    return render(request, 'libro/libro.html',{"libro_mostrar":libro})

def dame_libros_fecha(request, anyo_libro, mes_libro):
    libros = Libro.objects.prefetch_related("autores").select_related("biblioteca")
    libros = libros.filter(fecha_publicacion__year=anyo_libro, fecha_publicacion__month=mes_libro)
    return render(request, 'libro/lista.html',{"libros_mostrar":libros})

def dame_libros_idioma(request, tipo):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros.filter(Q(tipo=tipo) | Q(tipo="ES")).order_by("fecha_publicacion")
    return render(request, 'libro/lista.html',{"libros_mostrar":libros})

def dame_libros_biblioteca(request,id_biblioteca,texto_libro):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.filter(biblioteca=id_biblioteca).filter(descripcion__contains=texto_libro).order_by("-nombre")
    return render(request, 'libro/lista.html',{"libros_mostrar":libros})

def dame_ultimo_cliente_libro(request,libro):
    cliente = Cliente.objects.filter(prestamos__libro=libro).order_by("-prestamos__fecha_prestamo")[:1].get()
    return  render(request, 'cliente/cliente.html',{"cliente":cliente})

def libros_no_prestados(request):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.filter(prestamos=None)
    return render(request, 'libro/lista.html',{"libros_mostrar":libros})

def dame_agrupaciones_puntos_cliente(request):
    resultado = Cliente.objects.aggregate(Avg("puntos"),Max("puntos"),Min("puntos"))
    media = resultado["puntos__avg"]
    maximo = resultado["puntos__max"]
    minimo = resultado["puntos__min"]
    return render(request, 'cliente/agrupaciones.html',{"media":media,"maximo":maximo,"minimo":minimo})

def dame_biblioteca(request,id_biblioteca):
    biblioteca = Biblioteca.objects.prefetch_related(Prefetch("libros_biblioteca")).get(id=id_biblioteca)
    
    return render(request, 'biblioteca/biblioteca.html',{"biblioteca":biblioteca})

def dame_libros_titulo_en_descripcion(request):
    libros = Libro.objects.select_related("biblioteca").prefetch_related("autores")
    libros = libros.filter(descripcion__contains=F("nombre"))
  
    return render(request, 'libro/lista.html',{"libros_mostrar":libros})

def mi_error_404(request,exception=None):
    return render(request, 'errores/404.html',None,None,404)
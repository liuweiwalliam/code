<?php

/**
 * Created by IntelliJ IDEA.
 * User: walliam
 * Date: 2016/8/8
 * Time: 17:25
 */
class Product
{
    public $name = "walliam";
    public $num = "123456";
    public $price = "$5.99";

    function __construct($name, $price, $num)
    {
        $this->name = $name;
        $this->num = $num;
        $this->price = $price;

    }

    function getinfo()
    {
        echo "name=" . "{$this->name}</br>";
        echo "num=" . "{$this->num}</br>";
        echo "price=" . "{$this->price}";
    }
}

class Book extends Product
{
    public $line;
    public $page;
    function __construct($name, $price, $num, $page)
    {
        parent::__construct($name, $price, $num);
        $this->page = $page;
    }

    function getinfo()
    {
        echo "name=" . "{$this->name}</br>";
        echo "num=" . "{$this->num}</br>";
        echo "price=" . "{$this->price}</br>";
        echo "page=" . "{$this->page}";
    }
}

$book = new book("pigmalion", 10, 15,230);

$book->getinfo();
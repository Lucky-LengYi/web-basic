DROP DATABASE IF EXISTS TWWebBasic;

CREATE DATABASE TWWebBasic DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

use TWWebBasic;

CREATE TABLE question
(
    id int not null,
    name varchar(20) not null,
    question varchar(50) not null,
    answer varchar(50) not null,
    score int not null,
    classes varchar(20) not null,
    PRIMARY KEY (id)
)ENGINE=InnoDB;

CREATE TABLE options
(
        id int not null auto_increment,
    opt varchar(20),
    val varchar(50),
    question_id int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (question_id) REFERENCES question(id) on delete cascade on update cascade
)ENGINE=InnoDB;

insert into question(id,name,question,answer,score,classes) values(1,'questionOne','UML 的中文全称是:','统一建模语言',1,'Fill');
insert into question(id,name,question,answer,score,classes) values(2,'questionTwo','对象最突出的特征是:','封装 继承 多态',1,'Fill');
insert into question(id,name,question,answer,score,classes) values(3,'questionThree','UML 与软件工程的关系是','B',2,'SingleChoice');
insert into question(id,name,question,answer,score,classes) values(4,'questionFour','Java 语言支持','A',2,'SingleChoice');
insert into question(id,name,question,answer,score,classes) values(5,'questionFive','用例的粒度分为以下哪三种。','A B D',6,'MultipleChoice');
insert into question(id,name,question,answer,score,classes) values(6,'questionSix','类图由以下哪三部分组成。','A B C',6,'MultipleChoice');
insert into question(id,name,question,answer,score,classes) values(7,'questionSeven','用例图只是用于和客户交流和沟通的,用于确定需求。','false',2,'TrueOrFalse');
insert into question(id,name,question,answer,score,classes) values(8,'questionEight','在状态图中,终止状态在一个状态图中允许有任意多个。','true',2,'TrueOrFalse');
insert into question(id,name,question,answer,score,classes) values(9,'questionNine','简述什么是模型以及模型的表现形式?','',5,'ShortAnswer');

insert into options(opt,val,question_id) values(null,null,1);

insert into options(opt,val,question_id) values(null,null,2);
insert into options(opt,val,question_id) values(null,null,2);
insert into options(opt,val,question_id) values(null,null,2);

insert into options(opt,val,question_id) values('A','UML 就是软件工程',3);
insert into options(opt,val,question_id) values('B','UML 参与到软件工程中软件开发过程的几个阶段',3);
insert into options(opt,val,question_id) values('C','UML 与软件工程无关',3);
insert into options(opt,val,question_id) values('D','UML 是软件工程的一部分',3);

insert into options(opt,val,question_id) values('A','单继承',4);
insert into options(opt,val,question_id) values('B','多继承',4);
insert into options(opt,val,question_id) values('C','单继承和多继承都支持',4);
insert into options(opt,val,question_id) values('D','单继承和多继承都不支持',4);

insert into options(opt,val,question_id) values('A','概述级',5);
insert into options(opt,val,question_id) values('B','需求级',5);
insert into options(opt,val,question_id) values('C','用户目标级',5);
insert into options(opt,val,question_id) values('D','子功能级',5);

insert into options(opt,val,question_id) values('A','名称(Name)',6);
insert into options(opt,val,question_id) values('B','属性(Attribute)',6);
insert into options(opt,val,question_id) values('C','操作(Operation)',6);
insert into options(opt,val,question_id) values('D','方法(Function)',6);

insert into options(opt,val,question_id) values('true','正确',7);
insert into options(opt,val,question_id) values('false','错误',7);

insert into options(opt,val,question_id) values('true','正确',8);
insert into options(opt,val,question_id) values('false','错误',8);

insert into options(opt,val,question_id) values(null,null,9);

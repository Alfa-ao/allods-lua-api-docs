---
description: WidgetControl3D
---

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<WidgetControl3D>
	<Name>SimpleName</Name><!-- Имя описателя. -->
	<Priority>0</Priority><!-- number (integer) - Приоритет видимости окна. 
	По умолчанию: 0 -->
	<Children><!-- Опционально. Список подключаемых дочерних виджетов -->
		<Item href="Panel.(WidgetPanel).xdb" />
		<Item href="Panel2.(WidgetPanel).xdb" />
	</Children>
	<Placement><!-- Опционально. Параметры размера, позиции, масштаб -->
		<QuantumScale>false</QuantumScale><!-- Опционально. 
		boolean - скалировать ли виджет стипенчато при изменении размеров окна. 
        Поскольку шрифты могут быть четкими только при отображении пиксель в пиксель, 
            их размер можно менять только дискретно, по целым числам. 
            Соответственно, для сохранения пропорций контролов последние также должны менять свои размеры дискретно. 
        По умолчанию: false. -->
		<sizingWidget href="Panel.(WidgetPanel).xdb" /><!-- Опционально. 
		Виджет, по которому считается размер (используется в случае WIDGET_SIZING_CHILD) -->
		<sizingWidgets><!-- Опционально. 
		Аналогично sizingWidget. 
        Размер наибольшего из них будет влиять на размер родителя (используется в случае WIDGET_SIZING_CHILD). -->
			<Item href="Panel.(WidgetPanel).xdb" />
			<Item href="Panel2.(WidgetPanel).xdb" />
		</sizingWidgets>
		<X><!-- Пояснение https://alfa-ao.github.io/allods-lua-api-docs/api/types/WidgetPlacementLua -->
			<Align>WIDGET_ALIGN_LOW</Align>
			<Sizing>WIDGET_SIZING_DEFAULT</Sizing>
			<Pos>0</Pos>
			<HighPos>0</HighPos>
			<Size>0</Size>
		</X>
		<Y>
			<Align>WIDGET_ALIGN_LOW</Align>
			<Sizing>WIDGET_SIZING_DEFAULT</Sizing>
			<Pos>0</Pos>
			<HighPos>0</HighPos>
			<Size>0</Size>
		</Y>
	</Placement>
    <Visible>true</Visible><!-- Опционально. Видимость виджета
	По умолчанию: true -->
	<Enabled>true</Enabled><!-- Опционально. Включение виджета.
	По умолчанию: true -->
	<TabOrder>0</TabOrder><!-- Опционально. Порядок обхода виджетов по нажатию клавиши Tab
	По умолчанию: 0 -->
	<TransparentInput>false</TransparentInput><!-- Опционально. 
	Устанавливает, является ли виджет прозрачным для ввода.
	По умолчанию: false -->
    <PickChildrenOnly>false</PickChildrenOnly><!-- Опционально. 
	Указывает, необходимо ли обрабатывать мышиные реакции только для дочерних виджетов, игнорируя сам виджет.
	По умолчанию: false -->
	<IgnoreDblClick>false</IgnoreDblClick><!-- Опционально. 
	Устанавливает, будет ли игнорироваться двойное нажатие левой кнопоки мыши.
	По умолчанию: false -->
	<fade>1</fade><!-- Опционально. 
	Степень прозрачности виджета в диапазоне от 0 до 1, где 1.0 означает полную непрозрачность.
	По умолчанию: 1 -->
	<Reactions3D><!-- Опционально. Мышиные реакции -->
		<leftMouseDown>left_mouse_down</leftMouseDown><!-- Нажатие левой кнопки -->
		<leftMouseUp>left_mouse_up</leftMouseUp><!-- Отпускание левой кнопки -->
		<leftMouseDblClick>left_mouse_dbl_click</leftMouseDblClick><!-- Двойной клик левой кнопки -->
        
		<rightMouseDown>right_mouse_down</rightMouseDown><!-- Нажатие правой кнопки -->
		<rightMouseUp>right_mouse_up</rightMouseUp><!-- Отпускание правой кнопки -->
		<rightMouseDblClick>right_mouse_dbl_click</rightMouseDblClick><!-- Двойной клик правой кнопки -->
        
		<pointingChanged>pointing_changed</pointingChanged><!-- Уведомление о наведении курсора, смена наведения. -->
		<selfMousePosChanged>self_mouse_pos_changed</selfMousePosChanged><!-- Изменение позиции курсора над самим контролом -->
	</Reactions3D>
	<sceneClearColor>true</sceneClearColor><!-- Опционально. Очистка. -->
</WidgetControl3D>
```
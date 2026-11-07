```xml
<?xml version="1.0" encoding="UTF-8" ?>
<UIAddon>
	<Name>MyFirstAddon</Name><!-- Имя аддона рекомендуемо [A-Z0-9].
	Должен совпадать с имененем папки -->
	<AutoStart>false</AutoStart><!-- Опционально.
	(boolean) Автоматический запуск аддона (для пользовательских всегда false).
	По умолчанию: false -->
	<userAddonInfo>
		<name href="AddonName.txt" /><!-- Ссылка на локальный файл с кодировкой "UTF-16 LE".
		Содержит имя аддона для отображения в меню дополнений -->
        <description href="AddonDescription.txt" /><!-- Ссылка на локальный файл с кодировкой "UTF-16 LE".
		Содержит описание аддона для отображения в меню дополнений -->
		<license href="LICENSE" /><!-- Опционально. Ссылка на локальный файл лицензии -->
		<sourceLink href="" /><!-- Опционально. Ссылка на репозиторий -->
		<supportLink href="" /><!-- Опционально. Ссылка на поддержку -->
		<author>Author</author><!-- Опционально. Имя автора аддона -->
		<version>1.0.0</version><!-- Опционально. Версия аддона -->
		<apiVersion>18000000</apiVersion><!-- Опционально. (number (int32_t)) Версия API аддона.
		По умолчанию: -1 -->
		<buildTime>0</buildTime><!-- Опционально. Unix‑время (timestamp).
		По умолчанию: 0 -->
		<useCommonScripts>false</useCommonScripts><!-- Опционально. 
		(boolean) Использование системных CoreScripts.
		По умолчанию: false -->
	</userAddonInfo>
	<ScriptFileRefs><!-- Список последовательно подключаемых скриптов -->
		<Item href="/Mods/SampleCommon/CoreScripts/AddonBase.lua" />
		<Item href="Scripts/Main.lua" />
	</ScriptFileRefs>
	<Form href="Widgets/Main.(WidgetForm).xdb" /><!-- Опционально.
	Ссылка на форму описателя аддона для реализации GUI. -->
    <textsGroups><!-- Опционально. Группа текстовых описателей -->
        <Item>
            <groupName>rus</groupName>
            <texts href="Locales/lang/rus/Locale.(UIRelatedTexts).xdb" />
        </Item>
        <Item>
            <groupName>eng</groupName>
            <texts href="Locales/lang/eng/Locale.(UIRelatedTexts).xdb" />
        </Item>
        <Item>
            <groupName>common</groupName>
            <texts href="Locales/template/Locale.(UIRelatedTexts).xdb" />
        </Item>
    </textsGroups>
	<texturesGroups><!-- Опционально. Группа текстурных описателей -->
		<Item>
			<groupName>common</groupName>
			<textures href="Textures/Textures.(UIRelatedTextures).xdb"/>
		</Item>
	</texturesGroups>
	<widgetGroups><!-- Опционально. Группа виджетов описателей -->
		<Item>
			<groupName>common</groupName>
			<widgets href="Widgets/Templates.(UIRelatedWidgets).xdb" />
		</Item>
	</widgetGroups>
	<soundsGroups><!-- Опционально. Группа звуковых описателей -->
		<Item>
			<groupName>common</groupName>
			<sounds href="Sounds/Sounds.(UIRelatedSounds).xdb" />
		</Item>
	</soundsGroups>
	<styleSheets><!-- Опционально. Селекторы (стилизация) -->
        <Item href="Widgets/Styles.(WidgetCss).xdb" />
    </styleSheets>
</UIAddon>

```
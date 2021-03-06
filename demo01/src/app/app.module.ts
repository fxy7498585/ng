// 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// ng核心模块
import { NgModule } from '@angular/core';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HomeTitleComponent } from './components/home/home-title/home-title.component';

@NgModule({
  // 配置当前项目运行的组件
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HomeTitleComponent
  ],
  // 配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule
  ],
  // 配置项目所需要的服务
  providers: [],
  // 
  bootstrap: [AppComponent]
})
export class AppModule { }
